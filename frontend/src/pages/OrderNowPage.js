import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { ShoppingCart, Plus, Check } from 'lucide-react';
import { productsApi, cartApi, getSessionId, handleApiError } from '../services/api';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';

const OrderNowPage = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productsApi.getProducts();
      setProducts(response.data);
      
      // Initialize quantities
      const initialQuantities = {};
      response.data.forEach(product => {
        initialQuantities[product.id] = 1;
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    setQuantities(prev => ({ ...prev, [productId]: Math.max(1, quantity) }));
  };

  const handleAddToCart = async (product) => {
    try {
      const sessionId = getSessionId();
      const response = await cartApi.addToCart({
        session_id: sessionId,
        product_id: product.id,
        quantity: quantities[product.id] || 1
      });
      
      toast({
        title: "Added to Cart",
        description: `${product.name} added to cart successfully`,
        duration: 3000,
      });
    } catch (error) {
      const apiError = handleApiError(error);
      toast({
        title: "Error",
        description: apiError.message,
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  const getBulkDiscount = (basePrice, quantity) => {
    if (quantity >= 100) return 0.15; // 15% discount
    if (quantity >= 50) return 0.10; // 10% discount
    if (quantity >= 25) return 0.05; // 5% discount
    return 0;
  };

  const calculatePrice = (product, quantity) => {
    const discount = getBulkDiscount(product.price, quantity);
    return product.price * (1 - discount);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  Order Cordflex
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your ICU line management today. Choose from our available packages 
                  or contact us for custom pricing on larger orders.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Available Products
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the right package for your ICU needs
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2" style={{ color: '#214140' }}>
                          {product.name}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                            Single-Use
                          </Badge>
                          <Badge variant="secondary" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                            FDA Registered
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-2xl font-bold mb-2" style={{ color: '#214140' }}>
                        ${calculatePrice(product, quantities[product.id] || 1).toFixed(2)}
                        <span className="text-sm font-normal text-gray-600"> each</span>
                      </div>
                      
                      {getBulkDiscount(product.price, quantities[product.id] || 1) > 0 && (
                        <div className="text-sm text-green-600 mb-2">
                          <Check className="h-4 w-4 inline mr-1" />
                          {(getBulkDiscount(product.price, quantities[product.id] || 1) * 100).toFixed(0)}% bulk discount applied
                        </div>
                      )}
                      
                      <div className="text-lg font-semibold" style={{ color: '#1F8051' }}>
                        Total: ${(calculatePrice(product, quantities[product.id] || 1) * (quantities[product.id] || 1)).toFixed(2)}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Quantity:</label>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) - 1)}
                          disabled={(quantities[product.id] || 1) <= 1}
                        >
                          <Plus className="h-4 w-4 rotate-45" />
                        </Button>
                        <Input
                          type="number"
                          value={quantities[product.id] || 1}
                          onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                          className="w-20 text-center"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full hover:opacity-90 transition-opacity duration-200"
                      style={{ backgroundColor: '#214140', color: 'white' }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Bulk Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Bulk Pricing Available
                </h2>
                <p className="text-xl text-gray-600">
                  Save more with larger orders
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2" style={{ color: '#1F8051' }}>5%</div>
                      <div className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>25+ Units</div>
                      <p className="text-gray-600">Perfect for single units</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2" style={{ color: '#1F8051' }}>10%</div>
                      <div className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>50+ Units</div>
                      <p className="text-gray-600">Multi-unit implementation</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2" style={{ color: '#1F8051' }}>15%</div>
                      <div className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>100+ Units</div>
                      <p className="text-gray-600">Hospital-wide deployment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Need Custom Pricing?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  For large orders, extended contracts, or custom requirements, contact our sales team for personalized pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                  >
                    Request Quote
                  </Button>
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#1F8051', color: 'white' }}
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrderNowPage;