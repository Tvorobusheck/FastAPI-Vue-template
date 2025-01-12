import random
import string
import uuid


def random_str(length: int = 8) -> str:
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(length))

def path_with_id(router_path: str, id: int | uuid.UUID) -> str:
    return router_path + '/' + str(id)