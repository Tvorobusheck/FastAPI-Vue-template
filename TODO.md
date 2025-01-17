# TODO List

## Tasks

### Frontend
- [ ] Fixture for backend server in frontend
- [ ] Authorization for new project.
- [ ] Registration for new project.
- [ ] BusinessItem create, read, update and delete with permissions control for new project.
- [ ] Admin Panel ([template from git](https://github.com/PanJiaChen/vue-element-admin), [templates from vuejs website](https://vuejs.org/ecosystem/themes))
- [ ] Improve manifest for PWA
- [ ] Localization support

### Backend
- [ ] BusinessItem
- [ ] DB tests for BusinessItem
- [ ] Permissions
- [ ] Permission control and business logic for BusinessItem

### DevOps
- [ ] Check e2e and unit tests for frontend.
- [ ] Check new ideas for docker-compose.prod.yml. Traefick, for example.
- [ ] The `docker-compose.prod.yml` for deploying all services, including the database, on a VPS
- [ ] Add auto reload for backend and frontend.
- [ ] Certbot service.
- [ ] Add auto credentials from .env.
- [ ] Improve run options in vscode.
- [ ] A simple script to initialize a new project based on this template. It will set up the necessary folder structure, configuration files, and install dependencies for both frontend and backend.
- [ ] Lint support

### Example project
- [ ] Registration conformation via email for new project.
- [ ] Password recovery for new project.

## Completed
- [x] Crud tests for Item (Frontend)
- [x] Fix assets paths
- [x] Tests for auth and registration
- [x] Make auto reload (Backend)
- [x] Make auto reload (Frontend)
- [x] ElementPlus support.
- [x] Remove old graphql-project.
- [x] Vite.
- [x] Vite-PWA for cross-platform support.
- [-] Composition API.
- [x] Fix permission or owner for generated api
- [x] Generation of API client based on the OpenAPI specification from the backend.
- [x] Tests
- [x] Fixtures for tests.
- [x] Check pytest is correct.
- [x] [FastCRUD](https://github.com/igorbenav/fastcrud) for reducing boilerplate code.
- [x] Items create, read, update and delete for new project.
- [x] [FastAPI Users](https://github.com/fastapi-users/fastapi-users) for authorization, registration, and more.
- [x] Authorization for new project.
- [x] Registration for new project.
- [x] Pytest for unit testing
- [x] SQLAlchemy for ORM and database interaction
- [x] Alembic for database migrations
- [x] OpenAPI.json specification
- [x] Vitest for unit testing
- [x] A `docker-compose` configuration for easy management of containers.
- [x] Separate `Dockerfile` for backend and frontend, optimized for production and development environments
- [x] PostgreSQL service in docker-compose for database
- [x] Adminer in docker-compose for PostgreSQL.
- [x] Docker-compose launch option. Extension required: [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [x] Extension support: [Python Test Explorer for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter)
- [x] Extension support: [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
