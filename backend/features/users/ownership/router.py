

from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends, Query
from fastcrud import EndpointCreator

from features.users.common.models import active_user_id


class OwnerFilteredEndpointCreator(EndpointCreator):
    def _read_items(self):
        """Override to apply owner_id filter for reading multiple items."""
        async def endpoint(
            db: AsyncSession = Depends(self.session),
            owner_id: int = Depends(active_user_id),
            offset: int = Query(0),
            limit: int = Query(100),
        ):
            return await self.crud.get_multi(db, offset=offset, limit=limit, 
                                             owner_id=owner_id)

        return endpoint
