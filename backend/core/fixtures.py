import pytest
import uuid
from httpx import ASGITransport, AsyncClient
from typing import AsyncGenerator
from .router import app
from .db import create_db_and_tables, drop_db_and_tables
from .config import MOCKDATABASE_URL
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker

temp_db_url = MOCKDATABASE_URL

# Fixture for dynamically creating a temporary SQLite database
@pytest.fixture(scope="session")
async def client() -> AsyncGenerator[AsyncClient, None]:
    await create_db_and_tables()

    # Create the test client
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        yield ac
    await drop_db_and_tables()
