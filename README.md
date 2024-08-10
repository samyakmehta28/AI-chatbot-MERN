<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">AI-CHATBOT-MERN</h1>
</p>
<p align="center">
    <em>Empower Conversations: AI Bot with MERN Magic</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/samyakmehta28/AI-chatbot-MERN?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/samyakmehta28/AI-chatbot-MERN?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/samyakmehta28/AI-chatbot-MERN?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/samyakmehta28/AI-chatbot-MERN?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat&logo=Bootstrap&logoColor=white" alt="Bootstrap">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<br>
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running AI-chatbot-MERN](#-running-AI-chatbot-MERN)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

## Overview

The AI-chatbot-MERN project is a robust MERN stack application that integrates an AI-powered chatbot, providing users with an interactive chat experience. The backend handles chat logic and user interactions through controllers, connects to MongoDB, and interfaces with OpenAI's GPT-3 to generate responses. The project showcases the seamless integration of AI technology into a modern web application, offering a unique and engaging user experience.

---

## Features

|     | Feature           | Description                                                                                                                                                                                                                                    |
| --- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | React frontend communicates with a Node.js backend that interfaces with MongoDB. Backend serves as an API server implementing essential chatbot functionalities. Communication via REST APIs and real-time updates with websockets.            |
| 🔩  | **Code Quality**  | Follows TypeScript standards for both frontend and backend, focusing on readability and maintainability. Codebase adheres to ESLint rules for consistent style, with detailed error messaging.                                                 |
| 📄  | **Documentation** | Sporadic documentation available mostly in backend files. Lacks comprehensive documentation, making it challenging for new contributors to understand and onboard quickly.                                                                     |
| 🔌  | **Integrations**  | Dependencies include OpenAI, React libraries, Express middleware for routing, and JWT for authentication. Integrations provide essential functionalities and enhance the AI chatbot service.                                                   |
| 🧩  | **Modularity**    | Backend services modularized for easier maintenance and extensibility with separate services for AI response, client setup, and token management. Frontend components could benefit from further modularization for improved scalability.      |
| 🧪  | **Testing**       | Testing frameworks/tools not explicitly mentioned in the repository contents. Recommend integrating testing suites like Jest for unit and integration tests to ensure code reliability.                                                        |
| ⚡️ | **Performance**   | Efficiency and speed can be improved through code optimization and caching mechanisms. Resource usage might be optimized by implementing efficient algorithms and data structures. Scalability can be enhanced with load balancing strategies. |
| 🛡️  | **Security**      | Includes JWT for token generation and verification to secure user authentication. Ensure validation and sanitization of user inputs to prevent security vulnerabilities. Regularly update library dependencies for security patches.           |
| 📦  | **Dependencies**  | Key dependencies include React, Node.js modules like mongoose and bcrypt, OpenAI for chatbot responses, and frontend frameworks like Material-UI. Regularly update dependencies to leverage bug fixes and new features.                        |
| 🚀  | **Scalability**   | Scalability potential exists through Node.js clustering and load balancing to handle increased traffic efficiently. Optimize database queries and API responses for improved performance at scale.                                             |

---

## Repository Structure

```sh
└── AI-chatbot-MERN/
    ├── README.md
    ├── backend
    │   ├── .gitignore
    │   ├── README.md
    │   ├── package.json
    │   ├── src
    │   │   ├── controllers
    │   │   │   ├── chat-controller.ts
    │   │   │   └── user-controller.ts
    │   │   ├── db
    │   │   │   └── connection.ts
    │   │   ├── index.ts
    │   │   ├── models
    │   │   │   └── User.ts
    │   │   ├── routes
    │   │   │   ├── chat-routes.ts
    │   │   │   ├── index.ts
    │   │   │   └── user-routes.ts
    │   │   ├── services
    │   │   │   ├── openAI-client-service.ts
    │   │   │   └── openAI-response-service.ts
    │   │   └── utils
    │   │       ├── token-manager.ts
    │   │       └── validators.ts
    │   └── tsconfig.json
    └── frontend
        ├── .eslintrc.cjs
        ├── .gitignore
        ├── README.md
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── public
        │   ├── airobot.png
        │   ├── openai.png
        │   └── vite.svg
        ├── src
        │   ├── App.css
        │   ├── App.tsx
        │   ├── assets
        │   │   └── react.svg
        │   ├── components
        │   │   ├── ChatItem.tsx
        │   │   ├── CodeBlock.tsx
        │   │   ├── Header.tsx
        │   │   ├── ProtectedRoute.tsx
        │   │   └── shared
        │   │       ├── Logo.tsx
        │   │       ├── NavLinks.css
        │   │       └── NavLinks.tsx
        │   ├── context
        │   │   └── auth-context.tsx
        │   ├── helper
        │   │   └── api-communicator.tsx
        │   ├── index.css
        │   ├── main.tsx
        │   ├── pages
        │   │   ├── Chat.css
        │   │   ├── Chat.tsx
        │   │   ├── Home.css
        │   │   ├── Home.tsx
        │   │   ├── Login.css
        │   │   ├── Login.tsx
        │   │   ├── Notfound.tsx
        │   │   ├── Signup.tsx
        │   │   └── index.tsx
        │   └── vite-env.d.ts
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts
```

---

## Modules

<details closed><summary>backend</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tsconfig.json](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/tsconfig.json) | Backend configuration for NodeJS project in `AI-chatbot-MERN` repository. Specifies compiler options, target version, and output directory for TypeScript files. Includes source mapping and synthetic default imports. |
| [package.json](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/package.json)   | Summary: `chat-controller.ts` manages chat logic & `user-controller.ts` handles user interactions. Key for AI-chatbot-MERN architecture's backend functionality.                                                        |

</details>

<details closed><summary>backend.src</summary>

| File                                                                                          | Summary                                                                                                                                                       |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/index.ts) | Role:** Backend Server Setup**Features:\*\* Express server with middleware for CORS, logging, and routing. Connects to MongoDB and listens on specified port. |

</details>

<details closed><summary>backend.src.services</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [openAI-response-service.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/services/openAI-response-service.ts) | Feature Summary:\*\* **backend/src/services/openAI-response-service.ts** fetches OpenAI GPT-3 responses using `openAI-client-service` and returns the top message choice. It plays a crucial role in AI chatbot interaction within the MERN stack repository. |
| [openAI-client-service.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/services/openAI-client-service.ts)     | AI Chatbot Service Setup\*\*Configures OpenAI client for AI chatbot, using environment variables. Enhances backend functionality for chatbot service in MERN architecture.                                                                                    |

</details>

<details closed><summary>backend.src.utils</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [token-manager.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/utils/token-manager.ts) | Code Summary:\*\*`token-manager.ts` generates & verifies JWT tokens. Functions ensure user authentication & authorization through token validation against user data. Enhances backend security in AI-chatbot-MERN.                           |
| [validators.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/utils/validators.ts)       | This code snippet in `backend/src/utils/validators.ts` provides request validation middleware for login and signup. It ensures proper data format before processing in the AI-chatbot-MERN repository, enhancing data integrity and security. |

</details>

<details closed><summary>backend.src.models</summary>

| File                                                                                               | Summary                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [User.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/models/User.ts) | Code snippet in `User.ts` defines user and chat schemas using Mongoose for the AI chatbot app. It models user data and chat messages, crucial for storing and managing user interactions. |

</details>

<details closed><summary>backend.src.routes</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [chat-routes.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/routes/chat-routes.ts) | Code Summary:\*\*Manages chat routes in the backend, ensuring user authentication for history access, message generation, and clearing chat history. Facilitates secure chat functionality.                                         |
| [index.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/routes/index.ts)             | Summary: `backend/src/routes/index.ts` defines API routes for users and chats using Express, enabling interaction with corresponding controllers, centralizing endpoint management in the AI chatbot MERN application architecture. |
| [user-routes.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/routes/user-routes.ts) | User routes\*\* manage authentication within the MERN stack chatbot system. Validation, token verification, & user actions like signup, login & logout are performed securely through routers & controllers.                        |

</details>

<details closed><summary>backend.src.db</summary>

| File                                                                                                       | Summary                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [connection.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/db/connection.ts) | Code Summary:\***\*Role:** Handles MongoDB connections.**Features:** Connects and disconnects to MongoDB using Mongoose. |

</details>

<details closed><summary>backend.src.controllers</summary>

| File                                                                                                                          | Summary                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [user-controller.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/controllers/user-controller.ts) | Manages user authentication for MERN AI chatbot. Controllers handle user signup, login, and logout with cookie management and error handling.                                                    |
| [chat-controller.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/backend/src/controllers/chat-controller.ts) | Code Summary:\*\*In `chat-controller.ts`:-Generates chatbot responses based on user messages.-Retrieves message history and clears chat history.-Manages user session and database interactions. |

</details>

<details closed><summary>frontend</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [tsconfig.json](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/tsconfig.json)           | Code Summary:\***\*Role:** `AI Chatbot Frontend Configurations`**Features:** Configures frontend build for app and Node.js targeting, ensuring project structure and TypeScript compilation.---                                                                    |
| [index.html](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/index.html)                 | Code Summary:\***\*Code Snippet:** frontend/index.html**Role:** Entry point for frontend; defines HTML structure and loads main.tsx for React app using Vite.**Architecture Integration:** Orchestrates frontend setup with Vite, React, and TypeScript.           |
| [tsconfig.app.json](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/tsconfig.app.json)   | Code Summary:\*\*Controls front end TypeScript config for ES2020 with React JSX setup, enforcing strict linting rules and bundler mode for module resolutions.                                                                                                     |
| [vite.config.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/vite.config.ts)         | Code snippet in vite.config.ts configures Vite for React using the @vitejs/plugin-react-swc. Facilitates fast React development in the frontend of the AI-chatbot-MERN repository.                                                                                 |
| [package.json](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/package.json)             | Code snippet:** `frontend/package.json`**Role:** Configures build and lint scripts for the frontend of the AI chatbot application.**Critical Features:\*\*-Handles Vite development server-Executes TypeScript build-Lints with ESLint-Facilitates project preview |
| [.eslintrc.cjs](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/.eslintrc.cjs)           | Code snippet in `frontend/.eslintrc.cjs` configures ESLint for React TypeScript projects, enforcing best practices. Helps maintain code quality and consistency in the frontend of the AI-chatbot-MERN repository.                                                 |
| [tsconfig.node.json](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/tsconfig.node.json) | Code Snippet Summary:\***\*Role:** The `chat-controller.ts` in `backend/src/controllers` manages chat functionality by interacting with the chat service.**Features:** Handles chat requests, responses, and data flow within the chat module.                     |
| [package-lock.json](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/package-lock.json)   | Code snippet role:\*\* Handle user authentication in chatbot backend. Utilizes controllers for chat and user, and establishes DB connection.For more details, refer to: `AI-chatbot-MERN/backend/src/controllers`                                                  |

</details>

<details closed><summary>frontend.src</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [main.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/main.tsx)           | Code Summary:\*\* Frontend main file in the AI-chatbot-MERN repository. Sets up theme, routing, and authentication provider for the React application. Integrates Axios for API calls with cookie exchange enabled.        |
| [vite-env.d.ts](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/vite-env.d.ts) | Role:** Code snippet in `frontend/src/vite-env.d.ts` configures Vite for client-side development in the AI chatbot project's frontend.**Key Features:\*\* Sets up Vite client typings for enhanced development experience. |
| [App.css](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/App.css)             | Code Summary:\*\*`App.css` defines styles for the root element, logo animations, and card layout in the frontend of an AI chatbot app. It ensures consistent design and user experience across the application.            |
| [App.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/App.tsx)             | Summary:\***\*App.tsx** handles routing and authentication for the AI-chatbot web app, rendering different pages conditionally based on user authentication status.                                                        |
| [index.css](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/index.css)         | Code Summary: `frontend/src/index.css`\*\*File styling sets global font and background for UI, inverting images. Crucial for consistent design in frontend UI components.                                                  |

</details>

<details closed><summary>frontend.src.pages</summary>

| File                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Signup.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/Signup.tsx)     | Role:**Handles user signup process in frontend for AI chatbot app.**Features:\*\*-Utilizes context API for auth-Validates user input-Guides users through signup process                                                                                                                                                                              |
| [index.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/index.tsx)       | Code Summary:\*\*The code snippet exports key page components for app navigation: Chat, Home, Login, NotFound, Signup. Essential for frontend routing in the AI-chatbot-MERN repository.                                                                                                                                                              |
| [Home.css](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/Home.css)         | Code snippet in frontend/src/pages/Home.css styles the home page layout in AI-chatbot-MERN repository. It sets up a responsive and visually engaging welcome section with an animated image.                                                                                                                                                          |
| [Login.css](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/Login.css)       | Code in `Login.css` styles a login page for the AI chatbot frontend, ensuring responsive design with Flexbox for layout and image scaling.                                                                                                                                                                                                            |
| [Notfound.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/Notfound.tsx) | Role:** React component handling page redirection.**Key Features:\*\*-Renders `<Navigate>` for route redirection.-Redirects to home page (`/`).-Enhances user experience for invalid URLs.                                                                                                                                                            |
| [Login.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/Login.tsx)       | Summary:\*\* `Login.tsx` manages user login process. Validates and submits form data. Redirects if user is logged in. Handles error messages based on response status.                                                                                                                                                                                |
| [Chat.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/Chat.tsx)         | Code Summary:\***\*Role:** Frontend UI for AI chatbot. Handles user messages, chat history retrieval, and clearing. Displays chat interactions with personalized responses. Includes user authentication checks.**Features:** Message sending/receiving, chat history display, user auth validation, error handling, and chat clearing functionality. |
| [Chat.css](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/Chat.css)         | Code Summary:\*\*Manages styling for chat interface in AI-chatbot-MERN frontend. Defines layout, colors, message display, input design for user-assistant interaction. Enhances user engagement and readability within chat environment.                                                                                                              |
| [Home.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/pages/Home.tsx)         | Summary:\*\* `Home.tsx` in `frontend/src/pages` displays dynamic welcome messages based on user authentication status, guiding users to start chatting with the AI assistant upon logging in.                                                                                                                                                         |

</details>

<details closed><summary>frontend.src.components</summary>

| File                                                                                                                          | Summary                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Header.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/components/Header.tsx)                 | Header Component\***\*Description:** Renders the header with logo and navigation links using Material-UI. Maintains structure and navigation for frontend pages.                   |
| [ProtectedRoute.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/components/ProtectedRoute.tsx) | Summary:\*\* `ProtectedRoute.tsx` controls access based on user authentication for rendering components, directing users to the login page if not authenticated.                   |
| [CodeBlock.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/components/CodeBlock.tsx)           | CodeBlock component in frontend handles syntax highlighting using React. It dynamically detects and styles code in various languages. Promotes code readability.                   |
| [ChatItem.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/components/ChatItem.tsx)             | Summary: Chat item component in frontend module extracts and displays code blocks from messages using CodeBlock component, enhancing chat interface in AI-chatbot-MERN repository. |

</details>

<details closed><summary>frontend.src.components.shared</summary>

| File                                                                                                                     | Summary                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Logo.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/components/shared/Logo.tsx)         | Code Summary:\*\* Logo component in React. Displays company logo and project name with dynamic styling. Enhances visual branding on the UI. Contributing to a cohesive front-end user experience within the MERN AI Chatbot application. |
| [NavLinks.css](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/components/shared/NavLinks.css) | Code snippet in NavLinks.css enhances UI with styled button links. Complements frontend architecture for consistent design & user interaction.                                                                                           |
| [NavLinks.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/components/shared/NavLinks.tsx) | Code in NavLinks.tsx manages navigation and authentication UI elements based on user login status. It allows users to access chat, login, and signup functionalities.                                                                    |

</details>

<details closed><summary>frontend.src.context</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [auth-context.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/context/auth-context.tsx) | Code Summary:\*\*Manages user authentication in the frontend by providing login, signup, and logout functions. Checks and sets user status. Integrates with API calls for user operations. |

</details>

<details closed><summary>frontend.src.helper</summary>

| File                                                                                                                          | Summary                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [api-communicator.tsx](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/master/frontend/src/helper/api-communicator.tsx) | Code Summary:\***\*API Communicator** in frontend handles user authentication, chat interactions, and message history utilizing HTTP requests in the MERN AI chatbot app. |

</details>

---

## Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### Installation

1. Clone the AI-chatbot-MERN repository:

```sh
git clone https://github.com/samyakmehta28/AI-chatbot-MERN
```

2. Change to the project directory:

```sh
cd AI-chatbot-MERN
```

3. Install the dependencies for backend and frontend folders separately:

```sh
npm install
```

### Running AI-chatbot-MERN

Use the following command to run AI-chatbot-MERN (for backend and frontend folders separately):

```sh
npm run dev
```

### Tests

To execute tests, run:

```sh
npm test
```

---

## Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/samyakmehta28/AI-chatbot-MERN/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/samyakmehta28/AI-chatbot-MERN/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/samyakmehta28/AI-chatbot-MERN/issues)**: Submit bugs found or log feature requests for Ai-chatbot-mern.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/samyakmehta28/AI-chatbot-MERN
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
