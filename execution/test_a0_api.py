import requests
import hashlib
import json

def get_key(username, password):
    # Try common hashing patterns
    return hashlib.sha256((username + password).encode()).hexdigest()

URL = "http://localhost:50080/api_message"
USERNAME = "jonny"
PASSWORD = "antigravity_master"

keys_to_try = [
    PASSWORD,
    get_key(USERNAME, PASSWORD),
    get_key("", PASSWORD),
    hashlib.sha256(PASSWORD.encode()).hexdigest(),
    "test_key" # dummy
]

for key in keys_to_try:
    print(f"Trying key: {key[:10]}...")
    headers = {
        "X-API-KEY": key,
        "Content-Type": "application/json"
    }
    data = {
        "message": "Are you online?",
        "lifetime_hours": 1
    }
    try:
        response = requests.post(URL, headers=headers, json=data, timeout=10)
        print(f"Status: {response.status_code}")
        if response.status_code == 200:
            print("Successfully authenticated!")
            print(response.json())
            break
        else:
            print(f"Response: {response.text}")
    except Exception as e:
        print(f"Error: {e}")
