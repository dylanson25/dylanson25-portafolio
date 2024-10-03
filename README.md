# Dylanson25 Portfolio

Welcome to the official repository for my personal portfolio! This project showcases my skills, projects, and experience in web development using modern technologies like **AstroJS**, **TailwindCSS**, and **Netlify**.

## Table of Contents

* [Project Overview](#project-overview)
* [Technologies](#technologies)
* [Setup and Installation](#setup-and-installation)
* [Usage](#usage)
* [Continuous Integration (CI)](#continuous-integration-ci)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)

## Project Overview

This portfolio website is built to present my work, skills, and development journey. It is optimized for performance, scalability, and cross-browser compatibility. The website is live and continuously deployed on **Netlify**.

## Technologies

This project uses the following technologies:

* **[AstroJS](https://astro.build/)**: A modern static site builder for faster web development.
* **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for styling.
* **[Netlify](https://www.netlify.com/)**: Deployment and hosting of the website.
* **ESLint**: For maintaining code quality and adhering to best practices.
* **Prettier**: Code formatting to keep consistency across the project.

## Setup and Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/dylanson25/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies:**

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

This will start the AstroJS development server, and you can view the project locally.

## Usage

The primary commands to run and build the project are:

* `npm run dev`: Starts the development server.
* `npm run build`: Builds the project for production.
* `npm run preview`: Previews the production build locally.
* `npm run lint`: Runs ESLint to check for any code quality issues.
* `npm run format`: Runs Prettier to automatically format code.

## Continuous Integration (CI)

GitHub Actions are configured for this project to ensure consistent quality in every pull request:

* **Linting CI**: Automatically checks the code quality using ESLint.
* **Stylelint CI**: Ensures consistent styling of CSS and Astro files.

## Deployment

The project is deployed automatically on **Netlify** after each push or pull request. You can view the live version at: <https://dylanson25.dev>

To deploy manually, run:

```bash
npm run build
```

Then deploy the contents of the `dist/` directory to Netlify or your preferred hosting platform.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, feel free to create a pull request or open an issue.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
