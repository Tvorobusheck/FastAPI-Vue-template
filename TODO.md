# TODO List

## Tasks
### DevOps
- [ ] Build prod for frontend (js + html code) with script
- [ ] The `Dockerfile.prod.yml` for deploying backend on a VPS
- [ ] Certbot service.
- [ ] Add auto credentials from .env.
- [ ] Improve run options in vscode.
- [ ] Lint support
- [ ] Better Readme

### Frontend
- [ ] Improve manifest for PWA

## Optional
### DevOps
- [ ] Non-root in containers
- [ ] A simple script to initialize a new project based on this template. It will set up the necessary folder structure, configuration files, and install dependencies for both frontend and backend.
- [ ] Check new ideas for docker-compose.prod.yml. Traefick, for example.

### Example project
- [ ] Registration conformation via email for new project.
- [ ] Password recovery for new project.

### Frontend
- [ ] Improve manifest for PWA

### Backend
- [ ] OwnerMixin testing in ownership instead of items?
- [ ] alembic upgrade head on startup (fix, need to wait before database initialized)

## Completed
- [x] Token Refresh
- [x] Add auto reload for backend and frontend.
- [x] Sub items delete
- [x] Sub items update
- [x] Sub items create
- [x] Sub items list
- [x] Item update and delete page
- [x] Item view page
- [x] Item create page
- [x] Item list page
- [x] Wrapper and api's fixtures
- [x] Token Refresh [for fastapi_users](https://github.com/fastapi-users/fastapi-users/discussions/350)
- [x] Sub Items
- [x] Items name search
- [x] Pagination and extended filters for Owned items endpoint
- [x] Ownership
- [x] Ownership control for Items
- [x] item's create route
- [x] item's path route
- [x] item's update route
- [x] User's id for items
- [x] Alembic autogenerate migrations script
- [x] User and jwt fixtures
- [x] Redirects
- [x] Hide some navs for auth/unauth users
- [x] Error and succeess messages
- [x] Localization support
- [x] Loading refactor to just a component
- [x] Fix database in backend container (make it PostgeSQL)
- [x] Loadings (Frontend)
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
