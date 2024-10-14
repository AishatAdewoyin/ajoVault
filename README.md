
# AjoVault

## Overview

AjoVault is the collective idea and work of our team as a final project at our six-month DevCareer Backend Engineering program, where we specialized in Node.js and React for the frontend. I, [Your Name], took it upon myself to finalize and enhance the core functionalities to deepen my backend knowledge.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Structure
### Backend

- **config/**: Configuration files, including environment variables.
- **controllers/**: Controllers for handling requests and responses.
- **db/**: Database connection and queries.
- **models/**: Database models.
- **routes/**: Route definitions.
  - **authRoutes.js**: Authentication routes.
  - **utilRoutes.js**: Utility routes.

### Frontend

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
    git clone https://github.com/AishatAdewoyin/ajoVault.git
    cd project-name
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add necessary environment variables as specified in `node-express-server/config/env.js`.

4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

- **Frontend**: Access the frontend at `http://localhost:3000`.
- **Backend**: Access the backend API at `http://localhost:5000`.

---

**Developer**: [Aishat Adewoyin]