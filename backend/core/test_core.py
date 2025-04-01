"""
The `test_core` module contains unit tests for core functionalities, including
fixtures, database configurations, and basic application behavior.
"""
from core.fixtures import *

def test_one_plus_one():
    assert 1 + 1 == 2

def test_client_fixture(client: AsyncClient):
    assert client is not None and type(client) is AsyncClient


def test_db_env():
    from .config import DATABASE_URL, MOCKDATABASE_URL, MOCKDB
    assert MOCKDB is True
    assert DATABASE_URL == MOCKDATABASE_URL
    assert DATABASE_URL is not None
    assert len(DATABASE_URL) > 0