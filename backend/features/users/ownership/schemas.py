from typing import Optional
import uuid
from pydantic import BaseModel


class OwnedBaseSchemaMixin(BaseModel):
    owner_id: Optional[uuid.UUID] = None
