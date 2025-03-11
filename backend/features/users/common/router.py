# Important!
# Add routers to core/router.py
from typing import Annotated
from fastapi import Cookie, Depends, APIRouter, HTTPException
from fastapi_users.authentication import (
    AuthenticationBackend,
    BearerTransport,
    JWTStrategy,
)

import jwt

from core.config import JWT_SECRET
from .schemas import UserCreate, UserRead, UserUpdate
from .models import auth_backend, current_active_user, fastapi_users, bearer_transport, get_jwt_strategy

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

REFRESH_PATH = JWT_PATH + '/refresh'
@router.post(JWT_PREFIX + '/refresh', tags=['auth'])
async def refresh_jwt(strategy: Annotated[JWTStrategy, Depends(get_jwt_strategy)], user=Depends(current_active_user)):
    token = await strategy.write_token(user)
    return await bearer_transport.get_login_response(token)

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
