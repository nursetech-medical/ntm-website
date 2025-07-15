from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

# Enums
class ContactType(str, Enum):
    SAMPLE = "sample"
    TRIAL = "trial"
    GENERAL = "general"

class ContactStatus(str, Enum):
    NEW = "new"
    CONTACTED = "contacted"
    COMPLETED = "completed"

class ResourceType(str, Enum):
    WHITE_PAPER = "white_paper"
    RESEARCH_STUDY = "research_study"
    IMPLEMENTATION_GUIDE = "implementation_guide"
    TRAINING_GUIDE = "training_guide"

# Base Models
class BaseContact(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    hospital: Optional[str] = None
    department: Optional[str] = None

class SampleRequestCreate(BaseContact):
    beds: Optional[int] = None
    source: Optional[str] = None
    comments: Optional[str] = None

class TrialRequestCreate(BaseContact):
    title: str
    beds: int
    current_solution: Optional[str] = None
    challenges: List[str] = []
    start_date: Optional[str] = None
    timeline: Optional[str] = None
    stakeholders: Optional[str] = None

class GeneralContactCreate(BaseContact):
    organization: Optional[str] = None
    subject: str
    message: str

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    type: ContactType
    name: str
    email: str
    phone: Optional[str] = None
    hospital: Optional[str] = None
    department: Optional[str] = None
    message: str
    status: ContactStatus = ContactStatus.NEW
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Newsletter
class NewsletterSubscribe(BaseModel):
    email: EmailStr

class Newsletter(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    subscribed: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Cart
class CartItem(BaseModel):
    product_id: str
    quantity: int
    price: float

class CartItemCreate(BaseModel):
    session_id: str
    product_id: str
    quantity: int

class CartItemUpdate(BaseModel):
    session_id: str
    product_id: str
    quantity: int

class Cart(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    items: List[CartItem] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Product
class Product(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    price: float
    image: str
    category: str
    in_stock: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Resource
class ResourceDownload(BaseModel):
    resource_id: str
    email: EmailStr
    name: str
    organization: Optional[str] = None

class Resource(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    type: ResourceType
    description: str
    file_path: str
    download_count: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Testimonial
class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    title: str
    hospital: str
    content: str
    rating: int = 5
    image: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

# FAQ
class FAQ(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    question: str
    answer: str
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Response Models
class ContactResponse(BaseModel):
    success: bool
    message: str
    contact_id: Optional[str] = None

class NewsletterResponse(BaseModel):
    success: bool
    message: str

class CartResponse(BaseModel):
    items: List[CartItem]
    total: float
    session_id: str

class ResourceDownloadResponse(BaseModel):
    success: bool
    message: str
    download_url: Optional[str] = None