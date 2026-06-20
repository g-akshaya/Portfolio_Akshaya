# Akshaya Portfolio

Personal portfolio site for Akshaya, built with TanStack Start, React, Vite, and Tailwind CSS.

## Overview

This project is a single-page portfolio focused on AI, backend engineering, and project experience. It includes:

- A dynamic hero section with motion and visual effects
- About, stack, experience, and projects sections
- Social links and contact details
- File-based routing through TanStack Start

## Tech Stack

- React 19
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS v4
- Lucide React icons
- Motion

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run build:dev` - build in development mode
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint
- `npm run format` - format the codebase with Prettier

## Project Structure

- `src/routes/__root.tsx` - app shell and shared document head
- `src/routes/index.tsx` - homepage content
- `src/styles.css` - global styles
- `src/components/ui/` - reusable UI primitives

## Notes

- `src/routes/README.md` documents TanStack Start route conventions.
- `routeTree.gen.ts` is auto-generated and should not be edited manually.