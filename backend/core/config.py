from dotenv import load_dotenv
import os

dotenv_path = os.environ.get("DOTENV_PATH") 
load_dotenv(dotenv_path=dotenv_path)

DB_DRIVER = os.environ.get("DB_DRIVER")
DB_HOST = os.environ.get("DB_HOST")
DB = os.environ.get("POSTGRES_DB")
DB_USER = os.environ.get("POSTGRES_USER")
DB_PASSWORD = os.environ.get("POSTGRES_PASSWORD")
DEBUG = os.environ.get("DEBUG", False)
RELOAD = str(os.environ.get("RELOAD", False))

ROUTER_DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"
