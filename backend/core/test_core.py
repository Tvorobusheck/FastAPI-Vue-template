from core.fixtures import *

def test_one_plus_one():
    assert 1 + 1 == 2

def test_client_fixture(client: AsyncClient):
    assert client is not None and type(client) is AsyncClient


def test_db_env():
    from .config import DB_HOST, DB
    assert DB_HOST == 'localhost' or DB_HOST == '127.0.0.1'
    assert type(DB_HOST) is str and len(DB_HOST) > 0
    assert type(DB) is str and len(DB) > 0