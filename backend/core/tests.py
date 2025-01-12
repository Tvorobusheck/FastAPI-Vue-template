import pytest
from httpx import ASGITransport, AsyncClient
from main import app
from .db import engine, Base



pytestmark = pytest.mark.asyncio

def create_async_client():
    ac = AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    )
    return ac

def test_db_env():
    from .config import DB_HOST, DB
    assert DB_HOST == 'localhost' or DB_HOST == '127.0.0.1'
    assert type(DB_HOST) is str and len(DB_HOST) > 0
    assert type(DB) is str and len(DB) > 0
