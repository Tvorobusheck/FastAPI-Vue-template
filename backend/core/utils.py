"""
The `utils` module provides utility functions for common operations such as
string generation, path manipulation, header creation, and list processing.
"""

import random
import string
import uuid

def random_str(length: int = 8) -> str:
    """
    Generate a random string of uppercase letters and digits.

    :param length: Length of the random string. Default is 8.
    :return: Randomly generated string.
    """
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(length))

def path_with_id(router_path: str, id: int | uuid.UUID) -> str:
    """
    Append an ID to a router path.

    :param router_path: Base router path.
    :param id: ID to append (int or UUID).
    :return: Full path with the ID appended.
    """
    return router_path + '/' + str(id)

def get_jwt_header(jwt_token: str) -> dict:
    """
    Create a JWT authorization header.

    :param jwt_token: JWT token string.
    :return: Dictionary containing the Authorization header.
    """
    return {"Authorization": f"Bearer {jwt_token}"}

def x_www_form_urlencoded_header() -> str:
    """
    Create a header for x-www-form-urlencoded content type.

    :return: Dictionary containing the Content-Type header.
    """
    return {"Content-Type": "application/x-www-form-urlencoded"}

def is_there_item(items: list, id) -> bool:
    """
    Check if an item with a specific ID exists in a list.

    :param items: List of items (dictionaries with 'id' keys).
    :param id: ID to search for.
    :return: True if the item exists, False otherwise.
    """
    return len(list(filter(lambda x: x['id'] == id, items))) > 0

def is_sorted(lst, key=lambda x: x):
    """
    Check if a list is sorted based on a key function.

    :param lst: List to check.
    :param key: Key function to determine sorting order. Default is identity function.
    :return: True if the list is sorted, False otherwise.
    """
    for i, el in enumerate(lst[1:]):
        if key(el) < key(lst[i]):  # i is the index of the previous element
            return False
    return True