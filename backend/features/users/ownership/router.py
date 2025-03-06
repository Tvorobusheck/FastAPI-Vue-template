

from typing import Any, Optional, Union
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends, Query
from fastcrud import EndpointCreator
from fastcrud.paginated import ListResponse, PaginatedListResponse, compute_offset
from fastcrud.exceptions.http_exceptions import BadRequestException
from fastcrud.endpoint.helper import _create_dynamic_filters
from fastcrud.paginated.response import paginated_response


from features.users.common.models import active_user_id


class OwnerFilteredEndpointCreator(EndpointCreator):
    def _read_items(self):
        dynamic_filters = _create_dynamic_filters(self.filter_config, self.column_types)

        async def endpoint(
            db: AsyncSession = Depends(self.session),
            offset: Optional[int] = Query(
                None, description="Offset for unpaginated queries"
            ),
            limit: Optional[int] = Query(
                None, description="Limit for unpaginated queries"
            ),
            page: Optional[int] = Query(None, alias="page", description="Page number"),
            items_per_page: Optional[int] = Query(
                None, alias="itemsPerPage", description="Number of items per page"
            ),
            filters: dict = Depends(dynamic_filters),
            owner_id: int = Depends(active_user_id),
        ) -> Union[dict[str, Any], PaginatedListResponse, ListResponse]:
            filters['owner_id'] = owner_id
            is_paginated = (page is not None) or (items_per_page is not None)
            has_offset_limit = (offset is not None) and (limit is not None)

            if is_paginated and has_offset_limit:
                raise BadRequestException(
                    detail="Conflicting parameters: Use either 'page' and 'itemsPerPage' for paginated results or 'offset' and 'limit' for specific range queries."
                )

            if is_paginated:
                if not page:
                    page = 1
                if not items_per_page:
                    items_per_page = 10
                offset = compute_offset(page=page, items_per_page=items_per_page)  # type: ignore
                limit = items_per_page
            elif not has_offset_limit:
                offset = 0
                limit = 100

            if self.select_schema is not None:
                crud_data = await self.crud.get_multi(
                    db,
                    offset=offset,  # type: ignore
                    limit=limit,  # type: ignore
                    schema_to_select=self.select_schema,
                    return_as_model=True,
                    **filters,
                )
            else:
                crud_data = await self.crud.get_multi(
                    db,
                    offset=offset,  # type: ignore
                    limit=limit,  # type: ignore
                    **filters,
                )

            if is_paginated:
                return paginated_response(
                    crud_data=crud_data,
                    page=page,  # type: ignore
                    items_per_page=items_per_page,  # type: ignore
                )

            if not has_offset_limit:
                offset = 0
                limit = 100

            crud_data = await self.crud.get_multi(
                db,
                offset=offset,  # type: ignore
                limit=limit,  # type: ignore
                **filters,
            )
            return crud_data  # pragma: no cover

        return endpoint
