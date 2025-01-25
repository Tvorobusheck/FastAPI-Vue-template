# TODO List

## Tasks

### Frontend
- [ ] Loadings
- [ ] Error and succeess messages
- [ ] BusinessItem create, read, update and delete with permissions control for new project.
- [ ] Admin Panel ([template from git](https://github.com/PanJiaChen/vue-element-admin), [templates from vuejs website](https://vuejs.org/ecosystem/themes))
- [ ] Improve manifest for PWA
- [ ] Token Refresh
- [ ] Localization support

### Backend
- [ ] alembic upgrade head on startup (fix)
- [ ] BusinessItem
- [ ] DB tests for BusinessItem
- [ ] Permissions
- [ ] Permission control and business logic for BusinessItem
- [ ] Token Refresh [for fastapi_users](https://github.com/fastapi-users/fastapi-users/discussions/350)

### DevOps
- [ ] Fix debug
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
- [x] Logout
- [x] Profile
- [x] Authorization for new project.
- [x] Authentication (Frontend)
- [x] Unite common styles.
- [x] Main Page
- [x] Navigation
- [x] Better interface for Registration
- [x] Registration for new project.
- [x] Add ServerConfig from env
- [x] Fix rare db-bug when run all tests. [Possible solution](https://stackoverflow.com/questions/77968323/invalidrequesterror-during-concurrent-requests-with-fastapi-aiosqlite-and-sqla)
- [x] Fixture for backend test server in frontend
- [x] Test Server (with Dockerfile)
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
