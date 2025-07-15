import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Contact API
export const contactApi = {
  sampleRequest: (data) => apiClient.post('/contact/sample-request', data),
  trialRequest: (data) => apiClient.post('/contact/trial-request', data),
  generalContact: (data) => apiClient.post('/contact/general', data),
  getContacts: () => apiClient.get('/contact/'),
};

// Newsletter API
export const newsletterApi = {
  subscribe: (email) => apiClient.post('/newsletter/subscribe', { email }),
};

// Cart API
export const cartApi = {
  getCart: (sessionId) => apiClient.get(`/cart/${sessionId}`),
  addToCart: (data) => apiClient.post('/cart/add', data),
  removeFromCart: (sessionId, productId) => apiClient.delete(`/cart/remove/${sessionId}/${productId}`),
  updateCart: (data) => apiClient.put('/cart/update', data),
};

// Products API
export const productsApi = {
  getProducts: () => apiClient.get('/products/'),
  getProduct: (productId) => apiClient.get(`/products/${productId}`),
};

// Resources API
export const resourcesApi = {
  getResources: () => apiClient.get('/resources/'),
  downloadResource: (data) => apiClient.post('/resources/download', data),
};

// Testimonials API
export const testimonialsApi = {
  getTestimonials: () => apiClient.get('/testimonials/'),
};

// FAQ API
export const faqApi = {
  getFAQ: () => apiClient.get('/faq/'),
};

// Session management
export const getSessionId = () => {
  let sessionId = localStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = 'session_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    localStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

// Error handling utility
export const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return {
      message: error.response.data?.message || 'An error occurred',
      status: error.response.status,
      data: error.response.data
    };
  } else if (error.request) {
    // The request was made but no response was received
    return {
      message: 'Network error - please check your connection',
      status: 0,
      data: null
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    return {
      message: error.message || 'An unexpected error occurred',
      status: 0,
      data: null
    };
  }
};

export default apiClient;