# Important!
# Add routers to core/router.py
from fastapi import Depends, APIRouter

from .schemas import UserCreate, UserRead, UserUpdate
from .models import auth_backend, current_active_user, fastapi_users, User

ROUTER_PATH = '/users'
AUTH_PREFIX = '/auth'
AUTH_PATH = ROUTER_PATH + AUTH_PREFIX
JWT_PREFIX = '/jwt'
JWT_PATH = ROUTER_PATH + JWT_PREFIX
router = APIRouter(prefix=ROUTER_PATH)

LOGIN_PATH = JWT_PATH + '/login'
LOGOUT_PATH = JWT_PATH + '/logout'
router.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix=JWT_PREFIX, tags=["auth"]
)

REGISTER_PATH = AUTH_PATH + "/register"
router.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix=AUTH_PREFIX,
    tags=["auth"],
)
router.include_router(
    fastapi_users.get_reset_password_router(),
    prefix=AUTH_PREFIX,
    tags=["auth"],
)
router.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix=AUTH_PREFIX,
    tags=["auth"],
)
ME_PATH = AUTH_PATH + '/me' # current user info and patch
router.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix=AUTH_PREFIX,
    tags=["users"],
)
