import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import "dotenv/config";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function generateCommitMessage(commitMsgFile) {
  // 1. Перевірка токену
  if (!GITHUB_TOKEN) {
    console.log("⚠️  GITHUB_TOKEN not found in .env, skipping...");
    process.exit(0);
  }

  // 2. Отримуємо staged зміни
  const diff = execSync("git diff --cached --stat && git diff --cached", {
    encoding: "utf-8",
    maxBuffer: 50 * 1024,
  });

  if (!diff.trim()) {
    console.log("⚠️  No staged changes found");
    process.exit(0);
  }

  // 3. Якщо розробник вже написав повідомлення — не чіпаємо
  const existingMsg = readFileSync(commitMsgFile, "utf-8").trim();
  if (existingMsg && !existingMsg.startsWith("#")) {
    console.log("✅ Commit message already provided, skipping...");
    process.exit(0);
  }

  console.log("🤖 Generating commit message...");

  // 4. Запит до GitHub Models
  const response = await fetch(
    "https://models.inference.ai.azure.com/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 256,
        messages: [
          {
            role: "user",
            content: `Generate a git commit message for this diff.

Rules:
- Conventional Commits: type(scope): description
- Types: feat, fix, refactor, style, docs, test, chore
- Max 72 chars first line, imperative mood
- Optionally 2-3 bullet points after blank line
- English only

Git diff:
\`\`\`
${diff.slice(0, 6000)}
\`\`\`

Reply with ONLY the commit message, nothing else.`,
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    console.log(`❌ API error: ${response.status} ${response.statusText}`);
    process.exit(0); // не блокуємо коміт
  }

  const data = await response.json();
  const message = data.choices[0].message.content.trim();

  // 5. Записуємо повідомлення у файл
  writeFileSync(commitMsgFile, message);
  console.log(`✅ "${message.split("\n")[0]}"`);
}

// Отримуємо шлях до файлу від git
const commitMsgFile = process.argv[2];

if (!commitMsgFile) {
  console.error("Usage: node generate-commit.mjs <commit-msg-file>");
  process.exit(1);
}

generateCommitMessage(commitMsgFile).catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(0); // не блокуємо коміт навіть при помилці
});
