# Backend Development for a Food Delivery App

REST API backend for a food delivery app using Node.js

## Technical Specifications:

● API Request and Response Format:

- Request: { zone: "central", organization_id: "005",
  total_distance: 12, item_type: "perishable" }
- Response: { total_price: 20.5 }

● Database Models:

- Organization: { id, name }
- Item: { id, type, description }
- Pricing: { organization_id, item_id, zone, base_distance_in_km: 5,
  km_price: 1.5/1, fix_price: 10 }


##### Testing - 

API URL - https://food-delivery-app-backend-11of.onrender.com/api/v1/delivery-price

Method - POST

Body Content - 
{
    "zone": "north",
    "organization_id": 1,
    "total_distance": 12,
    "item_type": "non-perishable"
}


