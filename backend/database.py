from motor.motor_asyncio import AsyncIOMotorClient
from models import *
import os
from typing import List, Optional
import logging

logger = logging.getLogger(__name__)

class Database:
    def __init__(self, mongo_url: str, db_name: str):
        self.client = AsyncIOMotorClient(mongo_url)
        self.db = self.client[db_name]
        
    async def init_data(self):
        """Initialize database with sample data"""
        # Initialize products
        await self.init_products()
        await self.init_testimonials()
        await self.init_faq()
        await self.init_resources()
        
    async def init_products(self):
        """Initialize products collection"""
        products_count = await self.db.products.count_documents({})
        if products_count == 0:
            products = [
                Product(
                    name="Cordflex Starter Kit",
                    description="5 clips",
                    price=49.99,
                    image="/api/placeholder/200/200",
                    category="starter"
                ),
                Product(
                    name="Cordflex ICU Bundle",
                    description="25 clips",
                    price=199.99,
                    image="/api/placeholder/200/200",
                    category="bundle"
                ),
                Product(
                    name="Cordflex Department Pack",
                    description="100 clips",
                    price=699.99,
                    image="/api/placeholder/200/200",
                    category="department"
                )
            ]
            for product in products:
                await self.db.products.insert_one(product.dict())
            logger.info("Products initialized")
    
    async def init_testimonials(self):
        """Initialize testimonials collection"""
        testimonials_count = await self.db.testimonials.count_documents({})
        if testimonials_count == 0:
            testimonials = [
                Testimonial(
                    name="Sarah Johnson",
                    title="ICU Nurse Manager",
                    hospital="Large Urban Hospital",
                    content="The Cordflex Clip has saved our unit countless hours in line management. It's a small investment with massive returns.",
                    rating=5
                ),
                Testimonial(
                    name="Michael Chen",
                    title="Staff Nurse",
                    hospital="Level 1 Trauma Center",
                    content="I used to dread patient transfers due to tangles and pullouts, but Cordflex makes it seamless.",
                    rating=5
                ),
                Testimonial(
                    name="Lisa Rodriguez",
                    title="Quality Director",
                    hospital="Community Hospital",
                    content="We saw a 40% reduction in line pullouts within our first month of implementation.",
                    rating=5
                )
            ]
            for testimonial in testimonials:
                await self.db.testimonials.insert_one(testimonial.dict())
            logger.info("Testimonials initialized")
    
    async def init_faq(self):
        """Initialize FAQ collection"""
        faq_count = await self.db.faq.count_documents({})
        if faq_count == 0:
            faqs = [
                FAQ(
                    question="How long does it take to install the Cordflex Clip?",
                    answer="Installation takes just 30 seconds. The intuitive design works like a hair clip, making it easy for staff to use immediately.",
                    order=1
                ),
                FAQ(
                    question="Is training required for staff?",
                    answer="Minimal training is required - just 15 minutes of staff training is sufficient for full implementation.",
                    order=2
                ),
                FAQ(
                    question="What types of medical lines does it support?",
                    answer="Cordflex accommodates all line types and attaches to any surface with 2-degree freedom of movement.",
                    order=3
                ),
                FAQ(
                    question="Is the Cordflex Clip sterile?",
                    answer="Yes, Cordflex is single-use, sterile, and FDA registered for safe use in ICU environments.",
                    order=4
                ),
                FAQ(
                    question="What kind of results can we expect?",
                    answer="Clinical studies show 37% faster line identification, 40% reduction in line pullouts, and 25% increase in patient ambulation.",
                    order=5
                )
            ]
            for faq in faqs:
                await self.db.faq.insert_one(faq.dict())
            logger.info("FAQ initialized")
    
    async def init_resources(self):
        """Initialize resources collection"""
        resources_count = await self.db.resources.count_documents({})
        if resources_count == 0:
            resources = [
                Resource(
                    title="The True Cost of ICU Line Management",
                    type=ResourceType.WHITE_PAPER,
                    description="Comprehensive analysis of line management costs and inefficiencies in modern ICUs.",
                    file_path="/resources/true-cost-icu-line-management.pdf"
                ),
                Resource(
                    title="Cordflex Clinical Validation Study",
                    type=ResourceType.RESEARCH_STUDY,
                    description="Detailed clinical study results showing Cordflex effectiveness and safety data.",
                    file_path="/resources/cordflex-clinical-validation-study.pdf"
                ),
                Resource(
                    title="Value Analysis Committee Presentation",
                    type=ResourceType.IMPLEMENTATION_GUIDE,
                    description="Ready-to-use presentation template for hospital value analysis committees.",
                    file_path="/resources/value-analysis-committee-presentation.pptx"
                ),
                Resource(
                    title="Staff Training Materials",
                    type=ResourceType.TRAINING_GUIDE,
                    description="Complete training materials and protocols for nursing staff onboarding.",
                    file_path="/resources/staff-training-materials.pdf"
                )
            ]
            for resource in resources:
                await self.db.resources.insert_one(resource.dict())
            logger.info("Resources initialized")
    
    # Contact operations
    async def create_contact(self, contact: Contact) -> Contact:
        await self.db.contacts.insert_one(contact.dict())
        return contact
    
    async def get_contacts(self) -> List[Contact]:
        contacts = await self.db.contacts.find().to_list(1000)
        return [Contact(**contact) for contact in contacts]
    
    # Newsletter operations
    async def subscribe_newsletter(self, newsletter: Newsletter) -> Newsletter:
        # Check if email already exists
        existing = await self.db.newsletter.find_one({"email": newsletter.email})
        if existing:
            # Update subscription status
            await self.db.newsletter.update_one(
                {"email": newsletter.email},
                {"$set": {"subscribed": True}}
            )
            return Newsletter(**existing)
        else:
            await self.db.newsletter.insert_one(newsletter.dict())
            return newsletter
    
    # Cart operations
    async def get_cart(self, session_id: str) -> Optional[Cart]:
        cart_data = await self.db.carts.find_one({"session_id": session_id})
        if cart_data:
            return Cart(**cart_data)
        return None
    
    async def create_cart(self, cart: Cart) -> Cart:
        await self.db.carts.insert_one(cart.dict())
        return cart
    
    async def update_cart(self, cart: Cart) -> Cart:
        await self.db.carts.update_one(
            {"session_id": cart.session_id},
            {"$set": cart.dict()}
        )
        return cart
    
    async def delete_cart(self, session_id: str):
        await self.db.carts.delete_one({"session_id": session_id})
    
    # Product operations
    async def get_products(self) -> List[Product]:
        products = await self.db.products.find().to_list(1000)
        return [Product(**product) for product in products]
    
    async def get_product(self, product_id: str) -> Optional[Product]:
        product = await self.db.products.find_one({"id": product_id})
        if product:
            return Product(**product)
        return None
    
    # Resource operations
    async def get_resources(self) -> List[Resource]:
        resources = await self.db.resources.find().to_list(1000)
        return [Resource(**resource) for resource in resources]
    
    async def get_resource(self, resource_id: str) -> Optional[Resource]:
        resource = await self.db.resources.find_one({"id": resource_id})
        if resource:
            return Resource(**resource)
        return None
    
    async def increment_download_count(self, resource_id: str):
        await self.db.resources.update_one(
            {"id": resource_id},
            {"$inc": {"download_count": 1}}
        )
    
    # Testimonial operations
    async def get_testimonials(self) -> List[Testimonial]:
        testimonials = await self.db.testimonials.find().to_list(1000)
        return [Testimonial(**testimonial) for testimonial in testimonials]
    
    # FAQ operations
    async def get_faq(self) -> List[FAQ]:
        faqs = await self.db.faq.find().sort("order", 1).to_list(1000)
        return [FAQ(**faq) for faq in faqs]