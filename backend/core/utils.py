import random
import string
import uuid


def random_str(length: int = 8) -> str:
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(length))

def path_with_id(router_path: str, id: int | uuid.UUID) -> str:
    return router_path + '/' + str(id)

def get_jwt_header(jwt_token: str) -> dict:
    return {"Authorization": f"Bearer {jwt_token}"}

def x_www_form_urlencoded_header() -> str:
    return {"Content-Type": "application/x-www-form-urlencoded"}

def is_there_item(items: list, id) -> bool:
    return len(list(filter(lambda x: x['id'] == id, items))) > 0

def is_sorted(lst, key=lambda x: x):
    for i, el in enumerate(lst[1:]):
        if key(el) < key(lst[i]): # i is the index of the previous element
            return False
    return True