import pytest
import uuid
from httpx import ASGITransport, AsyncClient
from typing import AsyncGenerator
from main import app
from .db import Base, get_async_session
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker

temp_db_url = f"sqlite+aiosqlite:///:memory:"  # Temporary SQLite DB file

# Create engine for the temporary database
engine = create_async_engine(temp_db_url, echo=True)
AsyncSessionLocal = async_sessionmaker(bind=engine, expire_on_commit=False)

async def init_db():
    # Create the tables before each test
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

async def clean_db():
    # Optionally drop tables after the test (for cleanup)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

# Override the dependency to provide a session that commits changes
async def override_get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        yield session

# Fixture for dynamically creating a temporary SQLite database
@pytest.fixture(scope="session")
async def client() -> AsyncGenerator[AsyncClient, None]:
    await init_db()

    # Override the dependency in the app
    app.dependency_overrides[get_async_session] = override_get_async_session

    # Create the test client
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        yield ac
    await clean_db()
    # Clean up: remove the override
    # TODO: KeyError happens withouth the if statement. Need to investigate
    if get_async_session in app.dependency_overrides:
        del app.dependency_overrides[get_async_session]
