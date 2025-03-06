# JobHive: AI-Powered Job Search Assistant



[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](#contributing)
[![Deployment](https://img.shields.io/badge/deployment-Vercel-blue.svg)](https://your-deployment-link.com)

## 🚀 Overview
**JobHive** is an AI-driven job search assistant that streamlines job hunting by aggregating job listings, providing personalized recommendations, and tracking applications efficiently. Built using the **MERN stack** and integrated with **Gemini API**, JobHive simplifies the job search process for users.

## ✨ Features
- 🔍 **AI-Powered Job Search**: Smart job recommendations based on user preferences.
- 📊 **Application Tracker**: Manage and track job applications in one place.
- 🌍 **Real-Time Job Listings**: Fetch the latest jobs from various sources.
- 📝 **Resume Analysis**: Get AI-driven feedback on resume optimization.
- 📡 **Job Alerts**: Get notified about new job opportunities.
- 🎯 **Company Insights**: Analyze company profiles and work culture.

## 🛠 Tech Stack
- **Frontend**: React (Vite), TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: Gemini API
- **Job API Integration**: LinkedIn, Indeed APIs
- **Deployment**: Vercel (Frontend), Render (Backend)


## 🎯 Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- MongoDB
- Git
- Vite (for frontend development)

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Jasmeet-011/JobHive.git
cd JobHive
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../frontend
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in both `backend` and `frontend` directories and add necessary environment variables:
```env
# Backend .env file
PORT=5000
MONGO_URI=your_mongo_db_connection_string
GEMINI_API_KEY=your_gemini_api_key
JOB_API_KEY=your_job_api_key
```

```env
# Frontend .env file
VITE_BACKEND_URL=http://localhost:5000
```

### 4️⃣ Start the Application
#### Backend
```sh
cd backend
npm start
```
#### Frontend
```sh
cd frontend
npm run dev
```

## 📜 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/jobs` | Fetch job listings |
| `POST` | `/api/track` | Track job applications |
| `GET`  | `/api/companies/:id` | Fetch company insights |
| `POST` | `/api/resume/analyze` | Get resume optimization feedback |

## ✅ Best Practices Adopted
- ✅ **Modular Codebase**: Clean and scalable architecture.
- ✅ **Secure API Handling**: Uses environment variables to protect credentials.
- ✅ **Optimized Performance**: Caching and API rate limits for efficient data fetching.
- ✅ **Error Handling & Logging**: Implemented robust middleware.
- ✅ **Responsive UI**: Built with TailwindCSS for seamless user experience.

## 🤝 Contributing
We welcome contributions! Fork the repo, create a feature branch, and submit a pull request.

## 📄 License
This project is licensed under the [MIT License](LICENSE).

## 📩 Contact
For support or feedback, open an issue on [GitHub Issues](https://github.com/Jasmeet-011/JobHive/issues) or email **your.email@example.com**.

---
🎯 **Star this repo** ⭐ if you find JobHive helpful!
