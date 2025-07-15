from fastapi import APIRouter, HTTPException, Depends
from models import *
from database import Database
import logging
from typing import List

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/testimonials", tags=["testimonials"])

def get_db():
    from server import db
    return db

@router.get("/", response_model=List[Testimonial])
async def get_testimonials(db: Database = Depends(get_db)):
    try:
        testimonials = await db.get_testimonials()
        return testimonials
    except Exception as e:
        logger.error(f"Error fetching testimonials: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")