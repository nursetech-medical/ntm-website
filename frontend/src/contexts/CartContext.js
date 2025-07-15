import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartApi, getSessionId, handleApiError } from '../services/api';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const sessionId = getSessionId();
      const response = await cartApi.getCart(sessionId);
      setCartItems(response.data.items || []);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const addToCart = async (product) => {
    setIsLoading(true);
    try {
      const sessionId = getSessionId();
      const response = await cartApi.addToCart({
        session_id: sessionId,
        product_id: product.id,
        quantity: 1
      });
      setCartItems(response.data.items || []);
      return { success: true, message: 'Item added to cart' };
    } catch (error) {
      const apiError = handleApiError(error);
      return { success: false, message: apiError.message };
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    setIsLoading(true);
    try {
      const sessionId = getSessionId();
      const response = await cartApi.removeFromCart(sessionId, productId);
      setCartItems(response.data.items || []);
      return { success: true, message: 'Item removed from cart' };
    } catch (error) {
      const apiError = handleApiError(error);
      return { success: false, message: apiError.message };
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    setIsLoading(true);
    try {
      const sessionId = getSessionId();
      const response = await cartApi.updateCart({
        session_id: sessionId,
        product_id: productId,
        quantity: quantity
      });
      setCartItems(response.data.items || []);
      return { success: true, message: 'Cart updated' };
    } catch (error) {
      const apiError = handleApiError(error);
      return { success: false, message: apiError.message };
    } finally {
      setIsLoading(false);
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = async () => {
    setIsLoading(true);
    try {
      // Clear cart items one by one
      const sessionId = getSessionId();
      for (const item of cartItems) {
        await cartApi.removeFromCart(sessionId, item.product_id);
      }
      setCartItems([]);
      return { success: true, message: 'Cart cleared' };
    } catch (error) {
      const apiError = handleApiError(error);
      return { success: false, message: apiError.message };
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isLoading
      }}
    >
      {children}
    </CartContext.Provider>
  );
};