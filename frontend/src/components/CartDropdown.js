import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartDropdown = ({ onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleProceedToCheckout = () => {
    console.log('Proceeding to checkout');
    onClose();
  };

  const handleRequestQuote = () => {
    console.log('Request quote clicked');
    onClose();
  };

  if (cartItems.length === 0) {
    return (
      <Card className="absolute top-full right-0 mt-2 w-80 bg-white shadow-xl border z-50">
        <CardContent className="p-6 text-center">
          <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Button
            onClick={onClose}
            variant="outline"
            className="hover:bg-gray-50 transition-colors duration-200"
          >
            Continue Shopping
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="absolute top-full right-0 mt-2 w-96 bg-white shadow-xl border z-50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg" style={{ color: '#214140' }}>
          Shopping Cart ({cartItems.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Cart Items */}
        <div className="max-h-80 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center p-4 border-b border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-xs text-gray-600">Product</span>
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-sm text-gray-800">{item.name}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
                <p className="text-sm font-semibold" style={{ color: '#214140' }}>
                  ${item.price.toFixed(2)}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <Minus className="h-4 w-4 text-gray-600" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <Plus className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-1 rounded-full hover:bg-red-100 transition-colors duration-200 ml-2"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Subtotal:</span>
            <span className="font-semibold" style={{ color: '#214140' }}>
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Estimated Shipping:</span>
            <span className="text-sm text-gray-600">Calculated at checkout</span>
          </div>
          
          <div className="space-y-2">
            <Button
              onClick={handleProceedToCheckout}
              className="w-full hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#214140', color: 'white' }}
            >
              Proceed to Checkout
            </Button>
            <Button
              onClick={handleRequestQuote}
              variant="outline"
              className="w-full text-sm hover:bg-gray-50 transition-colors duration-200"
              style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
            >
              Request Quote for Large Orders
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              className="w-full text-sm hover:bg-gray-50 transition-colors duration-200"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartDropdown;