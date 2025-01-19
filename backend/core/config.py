from dotenv import load_dotenv
import os

dotenv_path = os.environ.get("DOTENV_PATH") 
load_dotenv(dotenv_path=dotenv_path)

PORT = int(os.environ.get("PORT", 8000))

DB_DRIVER = os.environ.get("DB_DRIVER")
DB_HOST = os.environ.get("DB_HOST")
DB = os.environ.get("POSTGRES_DB")
DB_USER = os.environ.get("POSTGRES_USER")
DB_PASSWORD = os.environ.get("POSTGRES_PASSWORD")

MOCKDATABASE_URL = "sqlite+aiosqlite:///:memory:"
MOCKDB = bool(os.environ.get("MOCKDB", False))
if MOCKDB:
    DATABASE_URL = MOCKDATABASE_URL
else:
    DATABASE_URL = f"{DB_DRIVER}://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB}"

DEBUG = bool(os.environ.get("DEBUG", False))
RELOAD = bool(os.environ.get("RELOAD", False))

ROUTER_DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"
JWT_EXPIRATION_TIME = 3600 # in seconds
