from fastapi import APIRouter, HTTPException, Depends
from models import *
from database import Database
import logging
from typing import List

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/faq", tags=["faq"])

def get_db():
    from server import db
    return db

@router.get("/", response_model=List[FAQ])
async def get_faq(db: Database = Depends(get_db)):
    try:
        faqs = await db.get_faq()
        return faqs
    except Exception as e:
        logger.error(f"Error fetching FAQ: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")