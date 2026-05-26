# 🚀 Thumblify — AI Powered Thumbnail Generator

Thumblify is a full-stack AI-powered thumbnail generation platform built for creators who want fast, visually engaging, YouTube-style thumbnails.

The application combines:

- 🎨 AI thumbnail generation
- 🔁 Thumbnail recreation workflow
- 🔐 JWT authentication
- 💳 Credit-based usage system
- 🌍 Community feed
- 📚 Personal thumbnail library
- ⚡ Groq-powered prompt optimization
- 🖼️ Pollinations image generation

---

# ✨ Features

## 🔐 Authentication System

- User Signup & Login
- JWT-based authentication
- Protected routes
- Persistent login sessions

---

## 🎨 AI Thumbnail Generation

Generate thumbnails using:

- Topic/title
- Style presets
- Aspect ratio
- Color palettes
- Additional prompts
- Optional source image

---

## 🔁 Recreate Mode

Modify existing thumbnail concepts using:

- Source image URL
- Change request
- Updated style and palette

---

## 🧠 Prompt Optimization

Groq AI rewrites user prompts into:

- Cleaner prompts
- Thumbnail-focused prompts
- Better visual outputs

---

## 💳 Credit System

- Each user starts with 15 credits
- 1 credit deducted per generation

---

## 📚 Personal Library

Users can:

- View generated thumbnails
- Delete thumbnails
- Download thumbnails

---

## 🌍 Community Feed

- Browse public thumbnails
- Explore trending ideas
- Like community thumbnails

---

## ⚡ Smart Preview Retry

Recreate thumbnails automatically retry loading for smoother UX.

---

# 🛠️ Tech Stack

## Frontend

- React 18
- Vite
- Tailwind CSS
- React Router v6
- Context API

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Groq SDK

## AI Services

- Groq API
- Pollinations AI

---

# 📂 Complete Project Structure

```bash
AI-Powered Thumbnail Generator (Thumblify)/
│
├── client/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── api/
│   │   │   └── api.js
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── ThumbnailCard.jsx
│   │   │   └── Toast.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AuthPage.jsx
│   │   │   ├── Community.jsx
│   │   │   ├── Generate.jsx
│   │   │   ├── Home.jsx
│   │   │   └── MyGenerations.jsx
│   │   │
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   └── thumbnailUrls.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── aiController.js
│   │   ├── authController.js
│   │   └── thumbnailController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Thumbnail.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── aiRoutes.js
│   │   ├── authRoutes.js
│   │   └── thumbnailRoutes.js
│   │
│   ├── utils/
│   │   ├── promptCache.js
│   │   ├── thumbnailHelpers.js
│   │   └── token.js
│   │
│   ├── package.json
│   └── server.js
│
├── .env.example
├── .gitignore
├── README.md
└── package-lock.json
```

---

# ⚙️ Environment Variables

## Server `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.3-70b-versatile
CLIENT_URL=http://localhost:5173
PORT=5000
```

---

## Client `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/thumblify.git
cd thumblify
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3️⃣ Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

# ▶️ Run the Application

## Start Backend

```bash
cd server
npm run dev
```

---

## Start Frontend

```bash
cd client
npm run dev
```

---

# 🌐 Local URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://127.0.0.1:5000 |

---

# 🔐 API Endpoints

## Authentication

| Method | Endpoint |
|---|---|
| POST | `/api/auth/signup` |
| POST | `/api/auth/login` |
| GET | `/api/auth/me` |

---

## AI Generation

| Method | Endpoint |
|---|---|
| POST | `/api/ai/generate-thumbnail` |

---

## Thumbnails

| Method | Endpoint |
|---|---|
| GET | `/api/thumbnails` |
| DELETE | `/api/thumbnails/:id` |
| GET | `/api/thumbnails/community` |
| POST | `/api/thumbnails/community/:id/like` |

---

# 🧠 How It Works

1. User logs in
2. JWT token stored locally
3. User opens Generate Studio
4. User chooses:
   - Generate Mode
   - Recreate Mode
5. Backend optimizes prompt using Groq
6. Pollinations generates image
7. Thumbnail stored in MongoDB
8. Credits updated
9. Thumbnail appears in:
   - My Generations
   - Community Feed

---

# 🎯 Core Advantages

- ✅ Creator-focused workflow
- ✅ AI prompt enhancement
- ✅ Thumbnail recreation support
- ✅ JWT protected system
- ✅ Persistent thumbnail storage
- ✅ Community inspiration feed
- ✅ Modern MERN architecture
- ✅ Free-tier AI integration

---

# 🔒 Security Best Practices

- Never commit `.env` files
- Use `.env.example`
- Rotate leaked credentials immediately
- Store secrets in environment variables only

---

# 📸 Screenshots

_Add your project screenshots here._

---

# 🧑‍💻 Author

Developed by Hemanth Pallapothu

---

# ⭐ Future Improvements

- Payment integration
- Advanced thumbnail templates
- AI face enhancement
- Real-time collaboration
- Prompt history analytics
- Multi-language thumbnail generation

---

# 📜 License

This project is licensed under the MIT License.

---

# 💡 Inspiration

Built for creators who want to move from idea → thumbnail → publish faster using AI.