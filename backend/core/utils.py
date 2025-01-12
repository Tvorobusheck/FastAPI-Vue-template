import random
import string


def random_str(length: int = 8):
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(length))
