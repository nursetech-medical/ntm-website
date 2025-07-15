from fastapi import APIRouter, HTTPException, Depends
from models import *
from database import Database
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/newsletter", tags=["newsletter"])

def get_db():
    from server import db
    return db

@router.post("/subscribe", response_model=NewsletterResponse)
async def subscribe_newsletter(request: NewsletterSubscribe, db: Database = Depends(get_db)):
    try:
        newsletter = Newsletter(email=request.email)
        await db.subscribe_newsletter(newsletter)
        
        logger.info(f"Newsletter subscription: {request.email}")
        
        return NewsletterResponse(
            success=True,
            message="Successfully subscribed to our newsletter!"
        )
    except Exception as e:
        logger.error(f"Error subscribing to newsletter: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")