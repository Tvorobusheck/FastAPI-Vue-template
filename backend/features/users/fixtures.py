from httpx import AsyncClient
import urllib.parse
from . import schemas, router
from core.fixtures import *
from core.utils import *


@pytest.fixture(scope="session")
async def create_user(client: AsyncClient) -> schemas.UserRead:
    email = random_str() + '@example.com'
    password = random_str()
    new_user = schemas.UserCreate(email=email, password=password)
    register_response = await client.post(router.REGISTER_PATH, json=new_user.model_dump())
    assert register_response.status_code == 201
    return new_user

@pytest.fixture(scope="session")
async def jwt(client: AsyncClient, create_user: schemas.UserRead) -> str:
    assert client is not None

    params = urllib.parse.urlencode({
        "username": create_user.email,
        "password": create_user.password
    })
    login_response = await client.post(router.LOGIN_PATH, data=params, headers=x_www_form_urlencoded_header())
    assert login_response.status_code == 200
    jwt_token = login_response.json()['access_token']
    assert len(jwt_token) > 0
    
    return jwt_token


@pytest.fixture(scope="session")
async def user_id(client: AsyncClient, jwt: str) -> uuid.UUID:
    me_response = await client.get(router.ME_PATH, headers=get_jwt_header(jwt))
    assert me_response.status_code == 200
    me_schema = schemas.UserRead(**me_response.json())
    return me_schema.id