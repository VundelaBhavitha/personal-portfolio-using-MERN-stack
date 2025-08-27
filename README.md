
# Personal Portfolio (MERN Stack)

This is a **personal portfolio website** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It has two main parts:  

- **Frontend** → Built with React (TypeScript + Vite).  
- **Backend** → Built with Node.js + Express, connected to MongoDB.  

##  Project Structure

personal-portfolio-using-MERN-stack/
│── portfolio-frontend/   # React + TypeScript frontend
│── portfolio-backend/    # Node.js + Express backend
│── README.md
│── .gitignore

##  Features

- Responsive and modern UI.  
- Portfolio projects showcase.  
- Contact form (backend API).  
- MongoDB integration for storing messages.  

##  Tech Stack

**Frontend:**  
- React.js (TypeScript + Vite)  
- Tailwind CSS / ShadCN UI (for styling)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ORM)  

##  Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/<your-username>/personal-portfolio-using-MERN-stack.git
cd personal-portfolio-using-MERN-stack


### 2️⃣ Setup Backend

cd portfolio-backend
npm install

Create a `.env` file inside `portfolio-backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string


Run backend:
npm start

### 3️⃣ Setup Frontend

cd ../portfolio-frontend
npm install
npm run dev

The frontend will run on `http://localhost:8080` and backend on `http://localhost:5000`.

##  Build for Production

### Frontend
npm run build

### Backend
Deploy on services like **Render / Railway / Heroku**.





Do you want me to also include **separate instructions for deploying** (like Netlify for frontend + Render for backend), so anyone cloning your repo can host it easily?
```
