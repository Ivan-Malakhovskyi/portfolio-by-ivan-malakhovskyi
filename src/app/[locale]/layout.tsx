import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
import { cookies } from "next/headers";

interface ILocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const LocaleLayout: React.FC<ILocaleLayoutProps> = async ({ children }) => {
  const cookiesData = cookies();

  const lang = cookiesData.get("NEXT_LOCALE")?.value || "en";

  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
