# Mantu Kumar — Portfolio

A responsive personal portfolio for **Mantu Kumar**, a full-stack developer. The site introduces Mantu, highlights technical skills and projects, and includes demo login and sign-up pages.

## Features

- Responsive navigation for desktop and mobile
- Home page with an introduction and links to portfolio sections
- About page with a developer profile, interests, and technology details
- Skills page covering programming, frontend, backend, databases, and tools
- Projects page with project descriptions, technology tags, and repository/demo links
- Login and sign-up form interfaces for demonstration
- Client-side page navigation with React Router
- Tailwind CSS styling

> **Note:** Login and sign-up are frontend demonstrations only; no authentication backend is connected. Some project repository and live-demo links are placeholders and should be replaced with the real URLs.

## Tech stack

- React 19
- Vite 8
- React Router
- Tailwind CSS 4
- React Icons

## Getting started

### Prerequisites

- Node.js (use a current supported LTS release)
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal after the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/skill` | Skills |
| `/project` | Projects |
| `/login` | Login demo |
| `/signup` | Sign-up demo |

## Project structure

```text
myPorfolio/
├── public/              # Public static assets
├── src/
│   ├── assets/          # Images and other imported assets
│   ├── Components/      # Shared UI components, including navigation
│   ├── Pages/           # Home, About, Skills, Projects, Login, and Signup
│   ├── App.jsx          # Router and page routes
│   ├── index.css        # Global styles and Tailwind CSS
│   └── main.jsx         # Application entry point
├── index.html
└── package.json
```

## Build for production

```bash
npm run build
```

The generated static site is written to `dist/`. You can test that build locally with:

```bash
npm run preview
```

## Customization

- Update profile details and social links in the page components under `src/Pages/`.
- Replace placeholder project repository and demo URLs in `src/Pages/Project.jsx`.
- Connect the login and sign-up forms to an authentication service before using them beyond a UI demo.
- Add or replace images in `src/assets/` as needed.
