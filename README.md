# Schulte Table Web App

![Version](https://img.shields.io/badge/dynamic/json?label=version&query=$.version&url=https://raw.githubusercontent.com/dantudev/schulte-table-web-app/refs/heads/main/package.json&color=green)
![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Frontend%20Build-646cff?logo=vite&logoColor=yellow)](https://vitejs.dev/)
[![Heroui React](https://img.shields.io/badge/UI-HeroUI-000000)](https://heroui.com/)

A modern and interactive web application for training **visual perception, attention, and reading speed** using Schulte tables.
The project is built with **React, TailwindCSS, and heroui**, with a focus on clean design, performance and usability.

---

## What is a Schulte Table?

A Schulte table is a simple grid of randomly arranged numbers (commonly 1–25).
The task is to find the numbers in ascending order as quickly as possible.

It’s a widely used method to:

-   Improve concentration and focus
-   Develop peripheral vision
-   Increase reading speed and eye movement efficiency

Originally developed for psychology and pedagogy, it is widely used to improve peripheral vision, concentration, speed of visual perception, and reading skills.

---

## Features

-   Random table generation on each session
-   Timer to measure performance
-   Restart button for quick retries
-   Responsive design for desktop and mobile
-   Clean and modular codebase for easy extension

---

## Tech Stack

-   [React 19](https://react.dev/) – UI framework
-   [Vite](https://vitejs.dev/) – development and build tool
-   [TailwindCSS 4](https://tailwindcss.com/) – styling
-   [HeroUI](https://heroui.com) – prebuilt components
-   [EmailJS](https://www.emailjs.com/) – email service

---

## Getting Started

Clone the repository:

```
git clone git@github.com:dantudev/schulte-table-web-app.git
cd schulte-table-web-app
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

---

## Configuration

Set up a `.env` file in the project root with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note**: Keep your `.env` file out of version control for security.

---

## Roadmap

* [x] Core Schulte table development
* [x] Navbar + Contact & About functionalities
* [x] Timer and restart table functionalities
* [x] Correct number / Wrong number clicked sounds
* [ ] Multilanguage compatibility and selector
* [ ] Light mode + toggle theme option
* [ ] Reversed table mode

---

## Performance & Testing

-   Built with Vite for fast development and optimized production build.
-   Tested on latest Chrome, Firefox, and Edge.
-   Mobile-friendly responsive layout.

---

## Contact and Support

If you have any questions, issues, or suggestions regarding this project, please don't hesitate to reach out:

-   You can always open a new [issue](https://github.com/dantudev/schulte-table-web-app/issues) or [discussion](https://github.com/dantudev/schulte-table-web-app/discussions) in this repository.
-   For contact or special support/questions... you can contact a repository administrator:
    -   David Antúnez Pérez: [GitHub](https://github.com/dantudev), [eMail](mailto:antunezdavid2003@gmail.com) or [Linkedin](https://www.linkedin.com/in/davidantunezperez).

Thank you for your interest and support!
