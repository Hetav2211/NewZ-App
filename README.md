# NewZ App

A modern, responsive news reader built with React, React Router, and Axios — powered by NewsAPI. Browse trending stories, filter by category, and open detailed views in a clean, fast UI.

---

## Badges

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000&labelColor=fff)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=fff)
![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?logo=axios&logoColor=fff)
![Build with CRA](https://img.shields.io/badge/Create%20React%20App-5.0.1-09D3AC?logo=create-react-app&logoColor=000)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Repo Stars](https://img.shields.io/github/stars/Hetav2211/NewZ-App?style=social)

---

## Overview

NewZ App is a lightweight, single‑page application that surfaces the latest headlines and category‑based news using the NewsAPI. It demonstrates practical React patterns: client-side routing, service-based API access, and modular components with a clean CSS styling approach.

---

## Features

- Category-based browsing (e.g., business, sports, technology)
- Detail view for a selected article
- Client-side routing with React Router
- Responsive layout and clean typography
- Axios-based API layer
- Simple, approachable code structure for learning and extension

---

## Tech Stack

- React 19
- React Router 7
- Axios
- Create React App (CRA) 5
- CSS

---

## Getting Started

### Prerequisites

- Node.js ≥ 18 (LTS recommended)
- npm ≥ 8

### Installation

```bash
git clone https://github.com/Hetav2211/NewZ-App.git
cd NewZ-App
npm install
```

### Environment Variables

This project reads your NewsAPI key from an environment variable at build time.

Create a `.env` file in the project root with:

```
REACT_APP_NEWS_API_KEY=your_newsapi_key_here
```

Optionally, if you maintain a custom base URL, add:

```
REACT_APP_NEWS_API_BASE=https://newsapi.org/v2
```

Notes:
- Variable names must start with `REACT_APP_` to be exposed to the client (CRA convention).
- Changing `.env` requires restarting the dev server.

### Run Locally

```bash
npm start
```

### Available Scripts

- `npm start` — Start dev server
- `npm build` — Production build
- `npm test` — Run tests (if present)
- `npm run eject` — Eject CRA config (irreversible)

---

## Routing

Defined in `src/App.js`:

- `/` → Home
- `/category/:category` → CategoryPage
- `/details` → Detailpage

Example: `/category/technology`

---


## Screenshots

![Home](assets/image1.png)
---
![Category](assets/image2.png)
---
![Detail](assets/image3.png)

---

## Acknowledgements

- Data by [NewsAPI.org](https://newsapi.org/)
- Bootstrapped with [Create React App](https://create-react-app.dev/)
- Routing by [React Router](https://reactrouter.com/)

---

Built with ❤️ by [Hetav2211](https://github.com/Hetav2211)
