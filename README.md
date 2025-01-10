# FastAPI-Vue-template

This project is a template designed to help you quickly start solo development. It provides a full-stack setup with FastAPI for the backend and Vue for the frontend, with built-in testing, Docker support, and Visual Studio Code (VS Code) compatibility. You can easily initialize a new project with the provided script.

> [!WARNING]  
> This template is still under development. Some features may not be fully implemented or functional. Please proceed with caution and ensure to test thoroughly before using it in production.

## Features

### Backend with FastAPI
The backend is built using FastAPI, a modern and fast web framework for building APIs with Python. It includes:
- [x] Pytest for unit testing
- [x] SQLAlchemy for ORM and database interaction
- [x] Alembic for database migrations
- [x] OpenAPI.json specification
- [ ] [FastAPI Users](https://github.com/fastapi-users/fastapi-users) for authorization, registration, and more
- [ ] [FastCRUD](https://github.com/igorbenav/fastcrud) for reducing boilerplate code

### Frontend with Vue
The frontend is built using Vue.js, a progressive JavaScript framework. It includes:
- [ ] Vite
- [x] Vitest for unit testing
- [ ] PWA Plugin / CLI PWA for cross-platform support
- [ ] Vuexy, CoreUI, or Vue Element Admin for pre-built themes
- [ ] Vuetify or Element UI
- [ ] Composition API
- [ ] Generation of API client based on the OpenAPI specification from the backend

### Docker Support
The project provides full Docker support for both backend and frontend. It includes:
- [x] A `docker-compose` configuration for easy management of containers
- [ ] The `docker-compose.prod.yml` for deploying all services, including the database, on a VPS
- [x] Separate `Dockerfile` for backend and frontend, optimized for production and development environments

### VS Code Support
- [x] Docker-compose launch option. Extension required: [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [x] Extension support: [Python Test Explorer for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter)
- [x] Extension support: [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

### Project Initialization Script
- [ ] A simple script to initialize a new project based on this template. It will set up the necessary folder structure, configuration files, and install dependencies for both frontend and backend.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fastapi-vue-template.git
cd fastapi-vue-template
