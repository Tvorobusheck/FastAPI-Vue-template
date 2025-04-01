"""
The `fixtures` module provides reusable pytest fixtures for testing, including
an HTTP client and database setup/teardown logic.
"""
import pytest
import uuid
from httpx import ASGITransport, AsyncClient
from typing import AsyncGenerator
from .router import app
from .db import create_db_and_tables, drop_db_and_tables
from .config import MOCKDATABASE_URL
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker

temp_db_url = MOCKDATABASE_URL

@pytest.fixture(scope="session")
async def client() -> AsyncGenerator[AsyncClient, None]:
    """
    Fixture to provide an HTTP client for testing.

    This fixture sets up a temporary database, initializes the application,
    and provides an AsyncClient for making HTTP requests.

    :yield: AsyncClient object.
    """
    await create_db_and_tables()

    # Create the test client
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        yield ac
    await drop_db_and_tables()
