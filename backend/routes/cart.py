from fastapi import APIRouter, HTTPException, Depends
from models import *
from database import Database
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/cart", tags=["cart"])

def get_db():
    from server import db
    return db

@router.get("/{session_id}", response_model=CartResponse)
async def get_cart(session_id: str, db: Database = Depends(get_db)):
    try:
        cart = await db.get_cart(session_id)
        if not cart:
            cart = Cart(session_id=session_id)
            await db.create_cart(cart)
        
        total = sum(item.price * item.quantity for item in cart.items)
        
        return CartResponse(
            items=cart.items,
            total=total,
            session_id=session_id
        )
    except Exception as e:
        logger.error(f"Error fetching cart: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/add", response_model=CartResponse)
async def add_to_cart(request: CartItemCreate, db: Database = Depends(get_db)):
    try:
        # Get product to verify it exists and get price
        product = await db.get_product(request.product_id)
        if not product:
            raise HTTPException(status_code=404, detail="Product not found")
        
        # Get or create cart
        cart = await db.get_cart(request.session_id)
        if not cart:
            cart = Cart(session_id=request.session_id)
        
        # Check if item already exists in cart
        existing_item = next((item for item in cart.items if item.product_id == request.product_id), None)
        
        if existing_item:
            existing_item.quantity += request.quantity
        else:
            cart.items.append(CartItem(
                product_id=request.product_id,
                quantity=request.quantity,
                price=product.price
            ))
        
        # Update cart in database
        await db.update_cart(cart)
        
        total = sum(item.price * item.quantity for item in cart.items)
        
        logger.info(f"Added to cart: {request.product_id} x{request.quantity}")
        
        return CartResponse(
            items=cart.items,
            total=total,
            session_id=request.session_id
        )
    except Exception as e:
        logger.error(f"Error adding to cart: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.delete("/remove/{session_id}/{product_id}", response_model=CartResponse)
async def remove_from_cart(session_id: str, product_id: str, db: Database = Depends(get_db)):
    try:
        cart = await db.get_cart(session_id)
        if not cart:
            raise HTTPException(status_code=404, detail="Cart not found")
        
        cart.items = [item for item in cart.items if item.product_id != product_id]
        await db.update_cart(cart)
        
        total = sum(item.price * item.quantity for item in cart.items)
        
        logger.info(f"Removed from cart: {product_id}")
        
        return CartResponse(
            items=cart.items,
            total=total,
            session_id=session_id
        )
    except Exception as e:
        logger.error(f"Error removing from cart: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/update", response_model=CartResponse)
async def update_cart_item(request: CartItemUpdate, db: Database = Depends(get_db)):
    try:
        cart = await db.get_cart(request.session_id)
        if not cart:
            raise HTTPException(status_code=404, detail="Cart not found")
        
        # Find and update the item
        for item in cart.items:
            if item.product_id == request.product_id:
                if request.quantity <= 0:
                    cart.items.remove(item)
                else:
                    item.quantity = request.quantity
                break
        
        await db.update_cart(cart)
        
        total = sum(item.price * item.quantity for item in cart.items)
        
        logger.info(f"Updated cart item: {request.product_id} to quantity {request.quantity}")
        
        return CartResponse(
            items=cart.items,
            total=total,
            session_id=request.session_id
        )
    except Exception as e:
        logger.error(f"Error updating cart: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")