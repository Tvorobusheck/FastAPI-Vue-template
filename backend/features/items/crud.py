from sqlalchemy import select, and_

from features.users.common.models import User
from . import models

def search_query(name: str, user: User) -> select:
    return select(models.Item).where(and_(models.Item.name.ilike(f"%{name}%"),
                                          models.Item.owner == user))\
                                .order_by(models.Item.name)