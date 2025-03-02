# Important!
# Add models files as import to migrations/env.py before target_metadata = Base.metadata
# it is neccessary for migrations control

import uuid
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship, Mapped, mapped_column
from sqlalchemy.orm import declared_attr

from features.users.common.models import User

class OwnedModelMixin(object):
    owner_id: Mapped[uuid.UUID] = mapped_column(ForeignKey(User.id), index=True)

    @declared_attr
    def owner(self) -> Mapped["User"]:
        return relationship(User)


