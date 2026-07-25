# 🚀 Page Pulse

Page Pulse is a website analysis tool that audits any public website and provides useful SEO and performance-related insights. Simply enter a website URL and get an instant report.

## 🌐 Live Demo

**Frontend:**  
https://page-pulse-frontend-gamma.vercel.app

**Backend API:**  
https://page-pulse-production-7cd2.up.railway.app/

---

## ✨ Features

- 🔍 Website SEO Audit
- 📄 Page Title Detection
- 📝 Meta Description Extraction
- 📌 H1 Tag Count
- 🖼️ Total Image Count
- ♿ Images Without Alt Attribute
- 📖 Word Count
- ⚡ Response Time
- 🌐 HTTP Status Code
- ❌ Error Handling for Invalid URLs

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Axios
- Cheerio

### Deployment
- Frontend: Vercel
- Backend: Railway

---

## 📂 Project Structure

```
Page-Pulse/
│
├── controllers/
│   └── auditController.js
│
├── services/
│   └── pageAnalyzer.js
│
├── tests/
│   └── audit.test.js
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/shashwatjha-dev/Page-Pulse.git
```

```bash
cd Page-Pulse
```

---

## 📦 Backend Setup

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
```

Run the backend

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 💻 Frontend Setup

Open a new terminal

```bash
cd Frontend
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 📡 API Endpoint

### Audit Website

**POST**

```
/api/audit
```

### Request Body

```json
{
  "url": "https://example.com"
}
```

### Sample Response

```json
{
  "success": true,
  "data": {
    "status": 200,
    "responseTime": 210,
    "title": "Example Domain",
    "metaDescription": "...",
    "h1Count": 1,
    "imageCount": 5,
    "imagesWithoutAlt": 1,
    "wordCount": 356
  }
}
```

---

## 📷 Screenshots

Add screenshots of:

- Home Page
- Audit Report
- Successful API Response

---

## 🎯 Future Improvements

- Lighthouse Integration
- Performance Score
- SEO Score
- Accessibility Score
- PDF Report Download
- Audit History
- Authentication
- Dashboard Analytics

---

## 👨‍💻 Author

**Shashwat Jha**

GitHub: https://github.com/shashwatjha-dev

---

## 📄 License

This project is developed for learning purposes as part of the **Digital Heroes Training Task**.