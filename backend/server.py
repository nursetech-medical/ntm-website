from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from database import Database

# Import routes
from routes import contact, newsletter, cart, products, resources, testimonials, faq

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db_instance = client[os.environ['DB_NAME']]

# Initialize database helper
db = Database(mongo_url, os.environ['DB_NAME'])

# Create the main app without a prefix
app = FastAPI(title="Cordflex API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Cordflex API is running", "version": "1.0.0"}

# Include all route modules
api_router.include_router(contact.router)
api_router.include_router(newsletter.router)
api_router.include_router(cart.router)
api_router.include_router(products.router)
api_router.include_router(resources.router)
api_router.include_router(testimonials.router)
api_router.include_router(faq.router)

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    """Initialize database with sample data on startup"""
    try:
        await db.init_data()
        logger.info("Database initialized successfully")
    except Exception as e:
        logger.error(f"Database initialization failed: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()