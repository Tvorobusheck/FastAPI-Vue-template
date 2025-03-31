# FastAPI-Vue-template

This project is a template designed to help you quickly start solo development. It provides a full-stack setup with FastAPI for the backend and Vue for the frontend, with built-in testing, Docker support, and Visual Studio Code (VSCode) compatibility. You can easily initialize a new project with the provided script.

> **Warning**  
> This template is under active development. Some features may not be fully implemented or functional. Please test thoroughly before using it in production.

## Features

### Backend with FastAPI
The backend is built using FastAPI, a modern and fast web framework for building APIs with Python. Key features include:
- Pytest for unit testing
- SQLAlchemy for ORM and database interaction
- Alembic for database migrations
- OpenAPI.json specification
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) for user management (authorization, registration, etc.)
- [FastCRUD](https://github.com/igorbenav/fastcrud) for reducing boilerplate code

### Frontend with Vue
The frontend is built using Vue.js, a progressive JavaScript framework. Key features include:
- Vite for fast development
- Vitest for unit testing
- Vite-PWA for cross-platform support
- API client generation based on the OpenAPI specification from the backend

### Docker Support
The project provides full Docker support for both backend and frontend:
- `docker-compose` configuration for easy container management with auto-reload for development
- Separate `Dockerfile` for backend and frontend, optimized for production and development
- PostgreSQL service in `docker-compose` for the database
- Adminer for database management (TODO: add auto credentials from `.env`)
- TODO: Add `docker-compose.prod.yml` for production deployment with auto-restart and Certbot integration

### VS Code Support
- Docker-compose launch option (requires [Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker))
- Python Test Explorer for running backend tests
- Vitest Explorer for running frontend tests

### Example Project
This template includes a simple item management application with the following features:
- Authorization and registration
- CRUD operations for items and subitems with ownership control

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tvorobusheck/fastapi-vue-template.git
   cd fastapi-vue-template
   ```

2. Set up the backend:
   ```bash
   sudo apt-get install virtualenv
   cd backend/
   virtualenv venv
   source venv/bin/activate
   pip install -r requirements.txt
   cp env/.example.dev.env env/.dev.env
   cp env/.example.debug.env env/.debug.env
   cp env/.example.test.env env/.test.env
   cd ..
   ```

3. Set up the frontend:
   ```bash
   cd frontend/
   npm install
   cp env/.example.dev.env env/.dev.env
   cp env/.example.test.env env/.test.env
   cd ..
   ```

### Generate API Client for Frontend
Run the generation script to create the API client:
```bash
cd frontend/
sh scripts/generate.sh
```

The generated API client will be located in the `api/` directory.

### Launching from VSCode

This project includes configurations for running and debugging directly from VSCode. To use these:

1. Install the required VSCode extensions:
   - [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
   - [Python Test Explorer for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter)
   - [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

2. Open the project in VSCode.

3. Use the `Run and Debug` panel to select one of the available configurations:
   - **Run Dev Compose**: Launches the development environment with Docker Compose.
   - **Run Backend Server (for frontend tests)**: Starts the backend server for testing the frontend.

4. Press `F5` or click the green play button to start the selected configuration.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.