import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, World!"}

def test_read_graphql():
    response = client.get("/graphql")
    assert response.status_code == 200

def test_hello_world_query():
    query = """
    query {
        helloWorld
    }
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200
    assert response.json() == {"data": {"helloWorld": "Hello from GQL server!"}}

def test_db_env():
    from config import DB_HOST, DB
    assert DB_HOST == 'localhost' or DB_HOST == '127.0.0.1'
    assert type(DB_HOST) is str and len(DB_HOST) > 0
    assert type(DB) is str and len(DB) > 0


def test_items_query():
    query = """
    query {
        items {
            name
            description
        }
    }
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200
    answer = response.json()
    assert response.is_error is False
    assert "items" in answer["data"]

def test_add_item_mutation():
    query = """
    query {
        items {
            name
            description
        }
    }
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200
    answer = response.json()
    old_num = len(answer["data"]["items"])
    mutation = """
    mutation {
        addItem(name: "item1", description: "description1") {
            name
            description
        }
    }
    """
    response = client.post("/graphql", json={"query": mutation})
    assert response.status_code == 200
    # Verify the item was added
    query = """
    query {
        items {
            name
            description
        }
    }
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200
    answer = response.json()
    assert len(answer["data"]["items"]) > old_num
    #assert answer == {"data": {"items": [{"name": "item1", "description": "description1"}]}}

