#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for Cordflex Medical Device Website
Tests all API endpoints systematically to ensure backend functionality
"""

import requests
import json
import uuid
import time
from datetime import datetime
from typing import Dict, Any, List

# Configuration
BACKEND_URL = "https://873e2f59-6365-4c5d-bcb1-377cd4dbf1ac.preview.emergentagent.com/api"
TEST_SESSION_ID = str(uuid.uuid4())

class BackendTester:
    def __init__(self, base_url: str):
        self.base_url = base_url
        self.session = requests.Session()
        self.test_results = []
        
    def log_test(self, test_name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {details}")
        
    def test_health_check(self):
        """Test API health check endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Cordflex API is running":
                    self.log_test("Health Check", True, f"API running, version: {data.get('version')}", data)
                    return True
                else:
                    self.log_test("Health Check", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Health Check", False, f"Status code: {response.status_code}")
                return False
        except Exception as e:
            self.log_test("Health Check", False, f"Exception: {str(e)}")
            return False
    
    def test_contact_endpoints(self):
        """Test all contact API endpoints"""
        print("\n=== Testing Contact API Endpoints ===")
        
        # Test sample request
        sample_data = {
            "name": "Dr. Sarah Johnson",
            "email": "sarah.johnson@medicalhospital.com",
            "phone": "+1-555-0123",
            "hospital": "Metropolitan Medical Center",
            "department": "ICU",
            "beds": 25,
            "source": "Website",
            "comments": "Interested in evaluating Cordflex for our ICU department"
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact/sample-request", json=sample_data)
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and data.get("contact_id"):
                    self.log_test("Contact - Sample Request", True, f"Contact ID: {data.get('contact_id')}", data)
                else:
                    self.log_test("Contact - Sample Request", False, f"Invalid response: {data}")
            else:
                self.log_test("Contact - Sample Request", False, f"Status code: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Contact - Sample Request", False, f"Exception: {str(e)}")
        
        # Test trial request
        trial_data = {
            "name": "Dr. Michael Chen",
            "email": "michael.chen@traumacenter.org",
            "phone": "+1-555-0456",
            "hospital": "Level 1 Trauma Center",
            "department": "Critical Care",
            "title": "Nurse Manager",
            "beds": 40,
            "start_date": "2025-02-01",
            "timeline": "3 months"
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact/trial-request", json=trial_data)
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and data.get("contact_id"):
                    self.log_test("Contact - Trial Request", True, f"Contact ID: {data.get('contact_id')}", data)
                else:
                    self.log_test("Contact - Trial Request", False, f"Invalid response: {data}")
            else:
                self.log_test("Contact - Trial Request", False, f"Status code: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Contact - Trial Request", False, f"Exception: {str(e)}")
        
        # Test general contact
        general_data = {
            "name": "Lisa Rodriguez",
            "email": "lisa.rodriguez@communityhospital.com",
            "phone": "+1-555-0789",
            "organization": "Community Hospital",
            "subject": "Product Information",
            "message": "I would like more information about Cordflex pricing and implementation timeline for our 50-bed facility."
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact/general", json=general_data)
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and data.get("contact_id"):
                    self.log_test("Contact - General Contact", True, f"Contact ID: {data.get('contact_id')}", data)
                else:
                    self.log_test("Contact - General Contact", False, f"Invalid response: {data}")
            else:
                self.log_test("Contact - General Contact", False, f"Status code: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Contact - General Contact", False, f"Exception: {str(e)}")
        
        # Test get contacts (admin endpoint)
        try:
            response = self.session.get(f"{self.base_url}/contact/")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Contact - Get All Contacts", True, f"Retrieved {len(data)} contacts", {"count": len(data)})
                else:
                    self.log_test("Contact - Get All Contacts", False, f"Expected list, got: {type(data)}")
            else:
                self.log_test("Contact - Get All Contacts", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Contact - Get All Contacts", False, f"Exception: {str(e)}")
    
    def test_newsletter_endpoint(self):
        """Test newsletter subscription endpoint"""
        print("\n=== Testing Newsletter API ===")
        
        newsletter_data = {
            "email": "newsletter.subscriber@medicalprofessional.com"
        }
        
        try:
            response = self.session.post(f"{self.base_url}/newsletter/subscribe", json=newsletter_data)
            if response.status_code == 200:
                data = response.json()
                if data.get("success"):
                    self.log_test("Newsletter - Subscribe", True, data.get("message"), data)
                else:
                    self.log_test("Newsletter - Subscribe", False, f"Subscription failed: {data}")
            else:
                self.log_test("Newsletter - Subscribe", False, f"Status code: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Newsletter - Subscribe", False, f"Exception: {str(e)}")
        
        # Test duplicate subscription
        try:
            response = self.session.post(f"{self.base_url}/newsletter/subscribe", json=newsletter_data)
            if response.status_code == 200:
                data = response.json()
                self.log_test("Newsletter - Duplicate Subscribe", True, "Handled duplicate subscription correctly", data)
            else:
                self.log_test("Newsletter - Duplicate Subscribe", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Newsletter - Duplicate Subscribe", False, f"Exception: {str(e)}")
    
    def test_products_endpoints(self):
        """Test products API endpoints"""
        print("\n=== Testing Products API ===")
        
        # Test get all products
        try:
            response = self.session.get(f"{self.base_url}/products/")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    self.log_test("Products - Get All", True, f"Retrieved {len(data)} products", {"count": len(data), "products": [p.get("name") for p in data]})
                    
                    # Test get specific product using first product ID
                    if data:
                        product_id = data[0].get("id")
                        if product_id:
                            try:
                                response = self.session.get(f"{self.base_url}/products/{product_id}")
                                if response.status_code == 200:
                                    product_data = response.json()
                                    if product_data.get("id") == product_id:
                                        self.log_test("Products - Get Specific", True, f"Retrieved product: {product_data.get('name')}", product_data)
                                    else:
                                        self.log_test("Products - Get Specific", False, f"ID mismatch: expected {product_id}, got {product_data.get('id')}")
                                else:
                                    self.log_test("Products - Get Specific", False, f"Status code: {response.status_code}")
                            except Exception as e:
                                self.log_test("Products - Get Specific", False, f"Exception: {str(e)}")
                else:
                    self.log_test("Products - Get All", False, f"Expected non-empty list, got: {data}")
            else:
                self.log_test("Products - Get All", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Products - Get All", False, f"Exception: {str(e)}")
        
        # Test get non-existent product
        try:
            fake_id = str(uuid.uuid4())
            response = self.session.get(f"{self.base_url}/products/{fake_id}")
            if response.status_code == 404:
                self.log_test("Products - Get Non-existent", True, "Correctly returned 404 for non-existent product")
            else:
                self.log_test("Products - Get Non-existent", False, f"Expected 404, got: {response.status_code}")
        except Exception as e:
            self.log_test("Products - Get Non-existent", False, f"Exception: {str(e)}")
    
    def test_cart_endpoints(self):
        """Test cart API endpoints"""
        print("\n=== Testing Cart API ===")
        
        # First get products to use in cart tests
        products = []
        try:
            response = self.session.get(f"{self.base_url}/products/")
            if response.status_code == 200:
                products = response.json()
        except:
            pass
        
        if not products:
            self.log_test("Cart - Setup", False, "No products available for cart testing")
            return
        
        # Test get empty cart
        try:
            response = self.session.get(f"{self.base_url}/cart/{TEST_SESSION_ID}")
            if response.status_code == 200:
                data = response.json()
                if data.get("session_id") == TEST_SESSION_ID and data.get("total") == 0:
                    self.log_test("Cart - Get Empty Cart", True, f"Empty cart created for session: {TEST_SESSION_ID}", data)
                else:
                    self.log_test("Cart - Get Empty Cart", False, f"Unexpected cart data: {data}")
            else:
                self.log_test("Cart - Get Empty Cart", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Cart - Get Empty Cart", False, f"Exception: {str(e)}")
        
        # Test add item to cart
        product_id = products[0].get("id")
        add_data = {
            "session_id": TEST_SESSION_ID,
            "product_id": product_id,
            "quantity": 2
        }
        
        try:
            response = self.session.post(f"{self.base_url}/cart/add", json=add_data)
            if response.status_code == 200:
                data = response.json()
                if len(data.get("items", [])) > 0 and data.get("total") > 0:
                    self.log_test("Cart - Add Item", True, f"Added {add_data['quantity']} items, total: ${data.get('total')}", data)
                else:
                    self.log_test("Cart - Add Item", False, f"Item not added properly: {data}")
            else:
                self.log_test("Cart - Add Item", False, f"Status code: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Cart - Add Item", False, f"Exception: {str(e)}")
        
        # Test update cart item
        update_data = {
            "session_id": TEST_SESSION_ID,
            "product_id": product_id,
            "quantity": 3
        }
        
        try:
            response = self.session.put(f"{self.base_url}/cart/update", json=update_data)
            if response.status_code == 200:
                data = response.json()
                item = next((item for item in data.get("items", []) if item.get("product_id") == product_id), None)
                if item and item.get("quantity") == 3:
                    self.log_test("Cart - Update Item", True, f"Updated quantity to 3, total: ${data.get('total')}", data)
                else:
                    self.log_test("Cart - Update Item", False, f"Quantity not updated properly: {data}")
            else:
                self.log_test("Cart - Update Item", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Cart - Update Item", False, f"Exception: {str(e)}")
        
        # Test remove item from cart
        try:
            response = self.session.delete(f"{self.base_url}/cart/remove/{TEST_SESSION_ID}/{product_id}")
            if response.status_code == 200:
                data = response.json()
                if len(data.get("items", [])) == 0 and data.get("total") == 0:
                    self.log_test("Cart - Remove Item", True, "Item removed successfully, cart is empty", data)
                else:
                    self.log_test("Cart - Remove Item", False, f"Item not removed properly: {data}")
            else:
                self.log_test("Cart - Remove Item", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Cart - Remove Item", False, f"Exception: {str(e)}")
    
    def test_testimonials_endpoint(self):
        """Test testimonials API endpoint"""
        print("\n=== Testing Testimonials API ===")
        
        try:
            response = self.session.get(f"{self.base_url}/testimonials/")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    # Check if testimonials have required fields
                    first_testimonial = data[0]
                    required_fields = ["name", "title", "hospital", "content", "rating"]
                    if all(field in first_testimonial for field in required_fields):
                        self.log_test("Testimonials - Get All", True, f"Retrieved {len(data)} testimonials with proper structure", {"count": len(data), "sample": first_testimonial})
                    else:
                        self.log_test("Testimonials - Get All", False, f"Missing required fields in testimonial: {first_testimonial}")
                else:
                    self.log_test("Testimonials - Get All", False, f"Expected non-empty list, got: {data}")
            else:
                self.log_test("Testimonials - Get All", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Testimonials - Get All", False, f"Exception: {str(e)}")
    
    def test_faq_endpoint(self):
        """Test FAQ API endpoint"""
        print("\n=== Testing FAQ API ===")
        
        try:
            response = self.session.get(f"{self.base_url}/faq/")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    # Check if FAQs have required fields and are ordered
                    first_faq = data[0]
                    required_fields = ["question", "answer", "order"]
                    if all(field in first_faq for field in required_fields):
                        # Check if FAQs are properly ordered
                        orders = [faq.get("order", 0) for faq in data]
                        if orders == sorted(orders):
                            self.log_test("FAQ - Get All", True, f"Retrieved {len(data)} FAQs in proper order", {"count": len(data), "sample": first_faq})
                        else:
                            self.log_test("FAQ - Get All", False, f"FAQs not properly ordered: {orders}")
                    else:
                        self.log_test("FAQ - Get All", False, f"Missing required fields in FAQ: {first_faq}")
                else:
                    self.log_test("FAQ - Get All", False, f"Expected non-empty list, got: {data}")
            else:
                self.log_test("FAQ - Get All", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("FAQ - Get All", False, f"Exception: {str(e)}")
    
    def test_resources_endpoints(self):
        """Test resources API endpoints"""
        print("\n=== Testing Resources API ===")
        
        # Test get all resources
        try:
            response = self.session.get(f"{self.base_url}/resources/")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    first_resource = data[0]
                    required_fields = ["title", "type", "description", "file_path"]
                    if all(field in first_resource for field in required_fields):
                        self.log_test("Resources - Get All", True, f"Retrieved {len(data)} resources with proper structure", {"count": len(data), "sample": first_resource})
                        
                        # Test resource download
                        resource_id = first_resource.get("id")
                        if resource_id:
                            download_data = {
                                "resource_id": resource_id,
                                "email": "test.download@medicalprofessional.com",
                                "name": "Dr. Test User",
                                "organization": "Test Medical Center"
                            }
                            
                            try:
                                response = self.session.post(f"{self.base_url}/resources/download", json=download_data)
                                if response.status_code == 200:
                                    download_response = response.json()
                                    if download_response.get("success") and download_response.get("download_url"):
                                        self.log_test("Resources - Download", True, f"Download initiated: {download_response.get('message')}", download_response)
                                    else:
                                        self.log_test("Resources - Download", False, f"Download failed: {download_response}")
                                else:
                                    self.log_test("Resources - Download", False, f"Status code: {response.status_code}")
                            except Exception as e:
                                self.log_test("Resources - Download", False, f"Exception: {str(e)}")
                    else:
                        self.log_test("Resources - Get All", False, f"Missing required fields in resource: {first_resource}")
                else:
                    self.log_test("Resources - Get All", False, f"Expected non-empty list, got: {data}")
            else:
                self.log_test("Resources - Get All", False, f"Status code: {response.status_code}")
        except Exception as e:
            self.log_test("Resources - Get All", False, f"Exception: {str(e)}")
    
    def test_error_handling(self):
        """Test error handling for various scenarios"""
        print("\n=== Testing Error Handling ===")
        
        # Test invalid JSON
        try:
            response = self.session.post(f"{self.base_url}/contact/general", data="invalid json")
            if response.status_code in [400, 422]:
                self.log_test("Error Handling - Invalid JSON", True, f"Correctly handled invalid JSON with status {response.status_code}")
            else:
                self.log_test("Error Handling - Invalid JSON", False, f"Unexpected status code: {response.status_code}")
        except Exception as e:
            self.log_test("Error Handling - Invalid JSON", False, f"Exception: {str(e)}")
        
        # Test missing required fields
        try:
            response = self.session.post(f"{self.base_url}/contact/general", json={"name": "Test"})
            if response.status_code in [400, 422]:
                self.log_test("Error Handling - Missing Fields", True, f"Correctly handled missing fields with status {response.status_code}")
            else:
                self.log_test("Error Handling - Missing Fields", False, f"Unexpected status code: {response.status_code}")
        except Exception as e:
            self.log_test("Error Handling - Missing Fields", False, f"Exception: {str(e)}")
        
        # Test invalid email format
        try:
            invalid_data = {
                "name": "Test User",
                "email": "invalid-email",
                "organization": "Test Org",
                "subject": "Test",
                "message": "Test message"
            }
            response = self.session.post(f"{self.base_url}/contact/general", json=invalid_data)
            if response.status_code in [400, 422]:
                self.log_test("Error Handling - Invalid Email", True, f"Correctly handled invalid email with status {response.status_code}")
            else:
                self.log_test("Error Handling - Invalid Email", False, f"Unexpected status code: {response.status_code}")
        except Exception as e:
            self.log_test("Error Handling - Invalid Email", False, f"Exception: {str(e)}")
    
    def test_cors_configuration(self):
        """Test CORS configuration"""
        print("\n=== Testing CORS Configuration ===")
        
        try:
            # Test preflight request
            headers = {
                'Origin': 'https://873e2f59-6365-4c5d-bcb1-377cd4dbf1ac.preview.emergentagent.com',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            }
            response = self.session.options(f"{self.base_url}/contact/general", headers=headers)
            
            if response.status_code == 200:
                cors_headers = response.headers
                if 'Access-Control-Allow-Origin' in cors_headers:
                    self.log_test("CORS - Configuration", True, f"CORS properly configured, Allow-Origin: {cors_headers.get('Access-Control-Allow-Origin')}")
                else:
                    self.log_test("CORS - Configuration", False, "CORS headers not found in response")
            else:
                self.log_test("CORS - Configuration", False, f"OPTIONS request failed with status: {response.status_code}")
        except Exception as e:
            self.log_test("CORS - Configuration", False, f"Exception: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Comprehensive Backend API Testing for Cordflex Medical Device Website")
        print(f"Backend URL: {self.base_url}")
        print(f"Test Session ID: {TEST_SESSION_ID}")
        print("=" * 80)
        
        # Run all test suites
        self.test_health_check()
        self.test_contact_endpoints()
        self.test_newsletter_endpoint()
        self.test_products_endpoints()
        self.test_cart_endpoints()
        self.test_testimonials_endpoint()
        self.test_faq_endpoint()
        self.test_resources_endpoints()
        self.test_error_handling()
        self.test_cors_configuration()
        
        # Generate summary
        self.generate_summary()
    
    def generate_summary(self):
        """Generate test summary"""
        print("\n" + "=" * 80)
        print("📊 BACKEND API TESTING SUMMARY")
        print("=" * 80)
        
        total_tests = len(self.test_results)
        passed_tests = len([t for t in self.test_results if t["success"]])
        failed_tests = total_tests - passed_tests
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests} ✅")
        print(f"Failed: {failed_tests} ❌")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if failed_tests > 0:
            print("\n❌ FAILED TESTS:")
            for test in self.test_results:
                if not test["success"]:
                    print(f"  • {test['test']}: {test['details']}")
        
        print("\n✅ CRITICAL FUNCTIONALITY STATUS:")
        
        # Check critical endpoints
        critical_endpoints = [
            "Health Check",
            "Contact - Sample Request",
            "Contact - Trial Request", 
            "Contact - General Contact",
            "Products - Get All",
            "Cart - Add Item",
            "Testimonials - Get All",
            "FAQ - Get All",
            "Resources - Get All"
        ]
        
        for endpoint in critical_endpoints:
            test_result = next((t for t in self.test_results if t["test"] == endpoint), None)
            if test_result:
                status = "✅" if test_result["success"] else "❌"
                print(f"  {status} {endpoint}")
        
        # Database connectivity check
        db_tests = [t for t in self.test_results if t["success"] and "Retrieved" in t["details"]]
        if db_tests:
            print(f"\n💾 DATABASE CONNECTIVITY: ✅ Working ({len(db_tests)} successful data operations)")
        else:
            print(f"\n💾 DATABASE CONNECTIVITY: ❌ Issues detected")
        
        print(f"\n🌐 API ENDPOINT COVERAGE:")
        print(f"  • Contact API: 4/4 endpoints tested")
        print(f"  • Newsletter API: 1/1 endpoints tested")
        print(f"  • Cart API: 4/4 endpoints tested")
        print(f"  • Products API: 2/2 endpoints tested")
        print(f"  • Testimonials API: 1/1 endpoints tested")
        print(f"  • FAQ API: 1/1 endpoints tested")
        print(f"  • Resources API: 2/2 endpoints tested")
        
        return passed_tests, failed_tests, total_tests

def main():
    """Main test execution"""
    tester = BackendTester(BACKEND_URL)
    tester.run_all_tests()
    
    passed, failed, total = tester.generate_summary()
    
    # Return appropriate exit code
    if failed == 0:
        print(f"\n🎉 ALL TESTS PASSED! Backend is ready for production.")
        return 0
    else:
        print(f"\n⚠️  {failed} tests failed. Backend needs attention before production.")
        return 1

if __name__ == "__main__":
    exit(main())