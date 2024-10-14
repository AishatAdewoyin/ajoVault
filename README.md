# AjoVault

AjoVault is a comprehensive web application designed to help users manage their finances through individual savings and collaborative pooled contributions.

## Table of Contents

- [Backend](#backend)
- [Frontend](#frontend)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Backend

- **config/**: Configuration files, including environment variables.
- **controllers/**: Controllers for handling requests and responses.
- **db/**: Database connection and queries.
- **models/**: Database models.
- **routes/**: Route definitions.
  - **[authRoutes.js](node-express-server/routes/authRoutes.js)**: Authentication routes.
  - **[utilRoutes.js](node-express-server/routes/utilRoutes.js)**: Utility routes.

## Frontend

- **components/**: Reusable React components.
  - **buttons/**: Button components.
  - **Cards/**: Card components.
  - **dashboard-components/**: Components for the dashboard.
  - **headers/**: Header components.
  - **inputs/**: Input components.
  - **models/**: Model components.
  - **web-app/**: Components specific to the web application.
  - **web-site/**: Components specific to the website.
- **icons/**: Icon assets.
- **images/**: Image assets.
- **pages/**: Page components.
- **routes/**: Frontend route definitions.
- **styles/**: CSS styles.

## Features

- **Authentication**: User login and registration using JWT.
- **Data Management**: CRUD operations for various data models.
- **Dynamic Content**: Rendering dynamic content based on user interactions.
- **Responsive Design**: Mobile-first design using Tailwind CSS.
- **State Management**: Efficient state management using React hooks and context.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/project-name.git
    cd project-name
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add necessary environment variables as specified in [`env.js`](node-express-server/config/env.js).

4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

- **Frontend**: Access the frontend at `http://localhost:3000`.
- **Backend**: Access the backend API at `http://localhost:5000`.

---

**Developer**: [Aishat Adewoyin](https://github.com/aishatadewoyin)