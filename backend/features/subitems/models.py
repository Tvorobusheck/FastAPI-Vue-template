# Important!
# Add models files as import to migrations/env.py before target_metadata = Base.metadata
# it is neccessary for migrations control

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from features.users.ownership.models import OwnedModelMixin
from features.items.models import Item
from core.db import Base

class Subitem(OwnedModelMixin, Base):
    __tablename__ = "subitems"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column()

    item_id: Mapped[int] = mapped_column(ForeignKey(Item.id), index=True)
    item: Mapped[Item] = relationship(Item)
