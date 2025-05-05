# Portfolio by `Ivan Malakhovskyi`

This is my personal portfolio website created using Next.js and Tailwind CSS. Here you can find information about me, my skills, projects I've worked on, and contact me.

## Features

- **Home**: Brief information about me and my skills.
- **Projects**: List of projects with detailed description, technologies and links to demos or repositories.
- **Certificates and awards**: Information about received certificates and awards.
- **Social**: Links to contact me via email or social media.
- **404 Page**: A stylized 404 error page with an option to return to the main page.
- **Multilingual support**: Available English, Ukrainian languages
- **Theme switcher**: Switch dark or light theme with taking into account system settings
- ##### `Google Search Console`: The Web App is available when performing a keyword search

## Technologies used

- **Next.js**: React framework for server rendering and creating static websites.
- **TypeScript** : For static typing
- **Tailwind CSS**: Utilitarian CSS framework for fast development of modern interfaces.
- **Vercel**: Platform for deploying Next.js applications.
- **i18n**: Multilingual support (Ukrainian, English)
- **Framer Motion**: Animations and effects

## Installation and launch

1. **Repository cloning**

```bash
git clone https://github.com/Ivan-Malakhovskyi/portfolio-by-ivan-malakhovskyi
cd portfolio-by-ivan-malakhovskyi
```

2. **Getting Started**

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project structure

├── components
│ └── Footer.tsx
│ └── Header.tsx
│ └── ProjectCard.tsx
├── app
│ └── layout.tsx
│ └── globals.css
│ └── not-found.tsx
└── page.tsx
├── public
│ └── images
├── tailwind.config.js
├── package.json
└── README.md s

---

## 🌐 Language switching

The site supports multiple languages. To change the language, use the switch in the header. Implemented via JSON dictionaries with `useTranslation`.

---

## 📬 Contact

- **Email:** ivan.malakhovskyi.dev@gmail.com
- **LinkedIn:** [Ivan Malakhovskyi](https://www.linkedin.com/in/ivan-malakhovskyi/)
- **GitHub:** [Ivan-Malakhovskyi](https://github.com/Ivan-Malakhovskyi)
