# API Contracts & Integration Guide

## Technology Stack
- **Frontend**: React with Tailwind CSS and Shadcn UI components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **NOT WordPress** - This is a modern full-stack application

## API Endpoints to Implement

### 1. Contact Forms
```
POST /api/contact/sample-request
Body: {
  name: string,
  email: string,
  hospital: string,
  department: string,
  phone: string,
  beds: number,
  source: string,
  comments: string
}
```

```
POST /api/contact/trial-request
Body: {
  name: string,
  title: string,
  email: string,
  phone: string,
  hospital: string,
  department: string,
  beds: number,
  current_solution: string,
  challenges: string[],
  start_date: string,
  timeline: string,
  stakeholders: string
}
```

```
POST /api/contact/general
Body: {
  name: string,
  email: string,
  phone: string,
  organization: string,
  subject: string,
  message: string
}
```

### 2. Newsletter Subscription
```
POST /api/newsletter/subscribe
Body: {
  email: string
}
```

### 3. Cart Management
```
GET /api/cart/:session_id
Response: {
  items: CartItem[],
  total: number,
  session_id: string
}

POST /api/cart/add
Body: {
  session_id: string,
  product_id: string,
  quantity: number
}

DELETE /api/cart/remove/:session_id/:product_id

PUT /api/cart/update
Body: {
  session_id: string,
  product_id: string,
  quantity: number
}
```

### 4. Products
```
GET /api/products
Response: Product[]

GET /api/products/:id
Response: Product
```

### 5. Resources
```
GET /api/resources
Response: Resource[]

POST /api/resources/download
Body: {
  resource_id: string,
  email: string,
  name: string,
  organization: string
}
```

### 6. Testimonials
```
GET /api/testimonials
Response: Testimonial[]
```

### 7. FAQ
```
GET /api/faq
Response: FAQ[]
```

## Database Models

### Contact
```
{
  _id: ObjectId,
  type: "sample" | "trial" | "general",
  name: string,
  email: string,
  phone: string,
  hospital: string,
  department: string,
  message: string,
  status: "new" | "contacted" | "completed",
  created_at: datetime,
  updated_at: datetime
}
```

### Newsletter
```
{
  _id: ObjectId,
  email: string,
  subscribed: boolean,
  created_at: datetime
}
```

### Cart
```
{
  _id: ObjectId,
  session_id: string,
  items: [{
    product_id: string,
    quantity: number,
    price: number
  }],
  created_at: datetime,
  updated_at: datetime
}
```

### Product
```
{
  _id: ObjectId,
  name: string,
  description: string,
  price: number,
  image: string,
  category: string,
  in_stock: boolean,
  created_at: datetime
}
```

### Resource
```
{
  _id: ObjectId,
  title: string,
  type: string,
  description: string,
  file_path: string,
  download_count: number,
  created_at: datetime
}
```

## Mock Data Migration
Current mock data in `/app/frontend/src/mockData.js` needs to be moved to:
- Products → MongoDB products collection
- Testimonials → MongoDB testimonials collection
- FAQ → MongoDB faq collection
- Resources → MongoDB resources collection

## Frontend Integration Changes
1. Replace mock data imports with API calls
2. Add loading states for API requests
3. Add error handling for failed requests
4. Add session management for cart
5. Add form validation and submission handling

## New Pages to Create
1. `/about` - About Nursetech Medical
2. `/contact` - Contact page with forms
3. `/product` - Product details page
4. `/resources` - Resource center
5. `/blog` - Blog/news section
6. `/support` - Support page
7. `/privacy` - Privacy policy
8. `/terms` - Terms of use

## Scroll Animations to Add
1. Intersection Observer for elements entering viewport
2. Fade-in animations for sections
3. Slide-in animations for cards
4. Counter animations for statistics
5. Stagger animations for lists

## Email Integration
- Send confirmation emails for form submissions
- Send download links for resources
- Send welcome emails for newsletter subscriptions