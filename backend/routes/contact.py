from fastapi import APIRouter, HTTPException, Depends
from models import *
from database import Database
import logging
from typing import List

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

def get_db():
    from server import db
    return db

@router.post("/sample-request", response_model=ContactResponse)
async def create_sample_request(request: SampleRequestCreate, db: Database = Depends(get_db)):
    try:
        # Create contact from sample request
        contact = Contact(
            type=ContactType.SAMPLE,
            name=request.name,
            email=request.email,
            phone=request.phone,
            hospital=request.hospital,
            department=request.department,
            message=f"Sample request - Beds: {request.beds}, Source: {request.source}, Comments: {request.comments}"
        )
        
        created_contact = await db.create_contact(contact)
        
        logger.info(f"Sample request created: {created_contact.id}")
        
        return ContactResponse(
            success=True,
            message="Sample request submitted successfully! We'll contact you within 24 hours.",
            contact_id=created_contact.id
        )
    except Exception as e:
        logger.error(f"Error creating sample request: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/trial-request", response_model=ContactResponse)
async def create_trial_request(request: TrialRequestCreate, db: Database = Depends(get_db)):
    try:
        # Create contact from trial request
        contact = Contact(
            type=ContactType.TRIAL,
            name=request.name,
            email=request.email,
            phone=request.phone,
            hospital=request.hospital,
            department=request.department,
            message=f"Trial request - Title: {request.title}, Beds: {request.beds}, Start Date: {request.start_date}, Timeline: {request.timeline}"
        )
        
        created_contact = await db.create_contact(contact)
        
        logger.info(f"Trial request created: {created_contact.id}")
        
        return ContactResponse(
            success=True,
            message="Trial request submitted successfully! Our team will contact you within 48 hours to schedule your consultation.",
            contact_id=created_contact.id
        )
    except Exception as e:
        logger.error(f"Error creating trial request: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/general", response_model=ContactResponse)
async def create_general_contact(request: GeneralContactCreate, db: Database = Depends(get_db)):
    try:
        # Create contact from general contact
        contact = Contact(
            type=ContactType.GENERAL,
            name=request.name,
            email=request.email,
            phone=request.phone,
            hospital=request.organization,
            department=request.subject,
            message=request.message
        )
        
        created_contact = await db.create_contact(contact)
        
        logger.info(f"General contact created: {created_contact.id}")
        
        return ContactResponse(
            success=True,
            message="Your message has been sent successfully! We'll respond within 24 hours.",
            contact_id=created_contact.id
        )
    except Exception as e:
        logger.error(f"Error creating general contact: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/", response_model=List[Contact])
async def get_contacts(db: Database = Depends(get_db)):
    try:
        contacts = await db.get_contacts()
        return contacts
    except Exception as e:
        logger.error(f"Error fetching contacts: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")