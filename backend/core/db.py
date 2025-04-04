"""
The `db` module handles database configuration and operations, including
SQLAlchemy engine creation, session management, and database table creation
and deletion.
"""

from typing import AsyncGenerator

from sqlalchemy import QueuePool
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase

from .config import DATABASE_URL, DEBUG

import logging
logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.ERROR)

class Base(DeclarativeBase):
    """
    Base class for SQLAlchemy models.
    """
    pass

engine = create_async_engine(DATABASE_URL)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)

async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    """
    Provide an asynchronous database session.

    :yield: AsyncSession object.
    """
    async with async_session_maker() as session:
        yield session

async def create_db_and_tables():
    """
    Create database tables based on SQLAlchemy models.
    """
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

async def drop_db_and_tables():
    """
    Drop all database tables.
    """
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
