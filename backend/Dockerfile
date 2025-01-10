FROM python:3.12-slim


EXPOSE 8000
# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

WORKDIR /app

# Copy the .env file
COPY env/.dev.env /app/.env

# copy migrations
COPY alembic.ini /app/alembic.ini
COPY migrations/ /app/migrations/

COPY core /app/core/

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
ENTRYPOINT ["python", "core/main.py"]
