from fastapi import APIRouter, HTTPException, Depends
from models import *
from database import Database
import logging
from typing import List

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/products", tags=["products"])

def get_db():
    from server import db
    return db

@router.get("/", response_model=List[Product])
async def get_products(db: Database = Depends(get_db)):
    try:
        products = await db.get_products()
        return products
    except Exception as e:
        logger.error(f"Error fetching products: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/{product_id}", response_model=Product)
async def get_product(product_id: str, db: Database = Depends(get_db)):
    try:
        product = await db.get_product(product_id)
        if not product:
            raise HTTPException(status_code=404, detail="Product not found")
        return product
    except Exception as e:
        logger.error(f"Error fetching product: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")