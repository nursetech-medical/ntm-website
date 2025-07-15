from fastapi import APIRouter, HTTPException, Depends
from models import *
from database import Database
import logging
from typing import List

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/resources", tags=["resources"])

def get_db():
    from server import db
    return db

@router.get("/", response_model=List[Resource])
async def get_resources(db: Database = Depends(get_db)):
    try:
        resources = await db.get_resources()
        return resources
    except Exception as e:
        logger.error(f"Error fetching resources: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/download", response_model=ResourceDownloadResponse)
async def download_resource(request: ResourceDownload, db: Database = Depends(get_db)):
    try:
        resource = await db.get_resource(request.resource_id)
        if not resource:
            raise HTTPException(status_code=404, detail="Resource not found")
        
        # Increment download count
        await db.increment_download_count(request.resource_id)
        
        # In a real implementation, you would:
        # 1. Send email with download link
        # 2. Generate temporary download URL
        # 3. Track download analytics
        
        logger.info(f"Resource download: {resource.title} by {request.email}")
        
        return ResourceDownloadResponse(
            success=True,
            message="Download link has been sent to your email!",
            download_url=f"/downloads/{resource.file_path}"
        )
    except Exception as e:
        logger.error(f"Error downloading resource: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")