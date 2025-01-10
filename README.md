# FastAPI-Vue-template
This project is a template designed to help you quickly start solo development. It provides a full-stack setup with FastAPI for the backend and Vue for the frontend, with built-in testing, Docker support, and Visual Studio Code (VS Code) compatibility. You can easily initialize a new project with the provided script.

## Features

- **Backend with FastAPI**  
  The backend is built using FastAPI, a modern and fast web framework for building APIs with Python. It includes:
  - Pytest for unit testing
  - SQLAlchemy for ORM and database interaction
  - Alembic for database migrations
- **Frontend with Vue**  
  The frontend is built using Vue.js, a progressive JavaScript framework. It includes:
  - Vitest for unit testing
- **Docker Support**  
  The project provides full Docker support for both backend and frontend. It includes:
  - A `docker-compose` configuration for easy management of containers
  - Separate `Dockerfile` for backend and frontend, optimized for production and development environments
- **VS Code Support**  
  This template is pre-configured for use with Visual Studio Code, including settings for Python and JavaScript development, linting, formatting, and debugging.
- **Project Initialization Script**  
  A simple script to initialize a new project based on this template. It will set up the necessary folder structure, configuration files, and install dependencies for both frontend and backend.

## Features Checklist

- [x] Docker Support  
  Full Docker support with `docker-compose`, `Dockerfile` for both backend and frontend.
  
- [ ] Backend with FastAPI  
  Includes FastAPI, SQLAlchemy, Alembic, and Pytest setup.

- [ ] Frontend with Vue  
  Vue.js frontend with Vitest for testing.

- [ ] VS Code Support  
  Pre-configured for Visual Studio Code with settings for Python and JavaScript.

- [ ] Project Initialization Script  
  Script to initialize a new project from the template.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rapid-solo-development-template.git
cd rapid-solo-development-template
