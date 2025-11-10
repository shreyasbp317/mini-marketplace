# mini-marketplace
The Mini Marketplace project is a full-stack web application that allows users to browse, manage, and interact with marketplace data such as products, users, and transactions. It is built with a FastAPI backend and a React-based frontend.
# 🛍️ Mini Marketplace

A full-stack **Mini Marketplace** web application built with **FastAPI** (backend) and **React.js** (frontend).  
This project demonstrates a modern marketplace setup — complete with RESTful APIs, database integration, and a dynamic frontend.

---

## 🚀 Tech Stack

### 🧱 Backend – FastAPI
- **FastAPI** – High-performance Python web framework
- **SQLAlchemy** – ORM for database management
- **PostgreSQL / SQLite** – Database engine
- **Uvicorn** – ASGI server for running the app

### 💻 Frontend – React
- **React.js** – Component-based frontend library
- **Axios / Fetch API** – For API communication
- **Tailwind CSS / Bootstrap** – For responsive design and styling

---

## 📁 Project Structure

mini-marketplace/
├── pythonProject12/ # Backend (FastAPI)
│ ├── main.py
│ ├── database.py
│ ├── models.py
│ ├── routes/
│ └── ...
│
└── mini-marketplace-v2/ # Frontend (React)
├── package.json
├── public/
└── src/


---

## ⚙️ Backend Setup (FastAPI)

### 1. Navigate to the backend folder
```bash
cd pythonProject12

2. Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate      # On Windows
source venv/bin/activate   # On Mac/Linux

3. Install dependencies
pip install -r requirements.txt

4. Run the server
uvicorn main:app --reload --port 8001


Your backend API will be live at 👉 http://127.0.0.1:8001

5. Verify API is running

Visit:

http://127.0.0.1:8001/


You should see:

{"message": "Mini Marketplace API is running"}

💻 Frontend Setup (React)
1. Navigate to the frontend folder
cd mini-marketplace-v2

2. Install dependencies
npm install

3. Create .env file in the root of the frontend
REACT_APP_API_URL=http://127.0.0.1:8001

4. Start the development server
npm start


The React app will start at 👉 http://localhost:3000

🔗 Connecting Frontend and Backend

In your FastAPI main.py, make sure CORS is enabled:

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


This allows your React app to make requests to your API.

🧪 Testing the Integration

Run FastAPI:

uvicorn main:app --reload --port 8001


Run React:

npm start


Open your browser:

http://localhost:3000


You should see your Mini Marketplace UI fetching data from FastAPI.

📸 Preview

Add screenshots or demo GIFs here once your app is running!

🧰 Troubleshooting

Port already in use → change FastAPI port:

uvicorn main:app --reload --port 8002


Database connection failed → update DATABASE_URL in database.py:

DATABASE_URL = "sqlite:///./test.db"   # Local testing


CORS error in browser → ensure middleware is added as shown above.

🧑‍💻 Author

Shreyas BP
📧 Add your contact / LinkedIn / portfolio link here

📜 License

This project is licensed under the MIT License – free to use and modify.
