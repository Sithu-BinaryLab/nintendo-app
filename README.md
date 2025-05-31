# Nintendo

## Version

**Version:** 1.0.0

## Description

`Nintendo` is a Next.js-based web application (version 15.3.3) that follows the atomic design pattern for structuring UI components. It uses `Shadcn` for accessible and customizable UI components, `TailwindCSS` (version 4) for styling, and `Lucide Icons` for icons. The project includes Storybook for component development and testing, with biome for linting and formatting.

---

## Installation

To install the dependencies and set up the project for development, ensure that you have [Node.js](https://nodejs.org/) installed. Since the project uses `pnpm`, if it is not installed globally, you can install it by running:

```bash
npm install -g pnpm
```

Then, install the project dependencies:

```bash
pnpm install
```

## Scripts

## Development

To start the development server, run:

```bash
pnpm run dev
```

The server will start on http://localhost:3000 and watch for changes to automatically reload.

## Production Build

To create a production build, use:

```bash
pnpm run build
```

## Starting the Production Server

After building, you can start the production server using:

```bash
pnpm run start
```

## Linting

To check and fix linting issues, run:

```bash
pnpm run lint
```

## Analyze Bundle Size

```bash
pnpm run analyze
```
