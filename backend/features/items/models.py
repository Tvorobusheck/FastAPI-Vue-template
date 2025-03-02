# Important!
# Add models files as import to migrations/env.py before target_metadata = Base.metadata
# it is neccessary for migrations control

from sqlalchemy.orm import Mapped, mapped_column
from features.users.ownership.models import OwnedModelMixin
from core.db import Base

class Item(OwnedModelMixin, Base):
    __tablename__ = "items"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column()
    description: Mapped[str] = mapped_column()

