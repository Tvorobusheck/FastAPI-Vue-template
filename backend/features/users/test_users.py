from httpx import AsyncClient
from pydantic import ValidationError
import pytest
import urllib.parse

from . import schemas, router
from core.fixtures import *
from core.utils import *


def test_schema():
    with pytest.raises(ValidationError):
        schemas.UserCreate(email="1.com", password="secret")

    schemas.UserCreate(email="correct@email.com", password="secret")


async def test_create_user(client: AsyncClient):
    new_user = schemas.UserCreate(email="1@example.com", password=random_str())
    response = await client.post(router.REGISTER_PATH, json=new_user.model_dump())
    assert response.status_code == 201

    repeat_response = await client.post(router.REGISTER_PATH, json=new_user.model_dump())
    assert repeat_response.status_code == 400

    invalid_response = await client.post(router.REGISTER_PATH, json={"hello": "world"})
    assert invalid_response.status_code == 422

    none_response = await client.post(router.REGISTER_PATH)
    assert none_response.status_code == 422


async def test_login_user(client: AsyncClient):
    email, password = "2@example.com", random_str()
    user_create = schemas.UserCreate(email=email, password=password)
    create_response = await client.post(router.REGISTER_PATH, json=user_create.model_dump())
    assert create_response.status_code == 201
    
    params = urllib.parse.urlencode({
        "username": email,
        "password": password
    })
    login_response = await client.post(router.LOGIN_PATH, data=params, headers=x_www_form_urlencoded_header())
    assert login_response.status_code == 200
    
    invalid_credentials = urllib.parse.urlencode({
        "username": email,
        "password": password + random_str()
    })
    invalid_login_response = await client.post(router.LOGIN_PATH, data=invalid_credentials, headers=x_www_form_urlencoded_header())
    assert invalid_login_response.status_code == 400


async def test_jwt_user(client: AsyncClient):
    email, password = "3@example.com", random_str()
    user_create = schemas.UserCreate(email=email, password=password)
    create_response = await client.post(router.REGISTER_PATH, json=user_create.model_dump())
    assert create_response.status_code == 201
    
    params = urllib.parse.urlencode({
        "username": email,
        "password": password
    })
    login_response = await client.post(router.LOGIN_PATH, data=params, headers=x_www_form_urlencoded_header())
    assert login_response.status_code == 200
    jwt_token = login_response.json()['access_token']
    assert len(jwt_token) > 0
    me_response = await client.get(router.ME_PATH, headers=jwt_header(jwt_token))
    assert me_response.status_code == 200
    me_schema = schemas.UserRead(**me_response.json())
    assert me_schema.email == email
    me_unauth_response = await client.get(router.ME_PATH, headers=jwt_header(random_str()))
    assert me_unauth_response.status_code == 401

    logout_response = await client.post(router.LOGOUT_PATH, headers=jwt_header(jwt_token))
    assert logout_response.status_code == 204
    # Logout doesn't remove jwt token
    logout_response = await client.post(router.LOGOUT_PATH, headers=jwt_header(jwt_token))
    assert logout_response.status_code == 204
    
    