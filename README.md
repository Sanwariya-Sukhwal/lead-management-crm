# Lead Management CRM

## Overview

Lead Management CRM is a full-stack web application developed as part of a Full Stack Developer Internship Assignment. The application helps businesses manage customer leads efficiently by providing features such as lead creation, lead tracking, searching, filtering, updating, and deleting leads through a responsive dashboard.

---

## Features

### Lead Management

* Add New Lead
* View All Leads
* Update Lead Details
* Delete Lead
* Search Leads by Name, Email, or Company
* Filter Leads by Status

### Dashboard

* Total Leads Count
* Status-wise Lead Statistics
* Responsive User Interface

### Advanced Features

* Pagination
* Sorting
* Search Functionality
* Status Filtering
* Live Statistics Dashboard

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL (Neon)

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: Neon PostgreSQL

---

## Project Structure

```text
lead-management-crm/

├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── database/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## API Endpoints

### Create Lead

```http
POST /api/leads
```

### Get All Leads

```http
GET /api/leads
```

### Get Lead By ID

```http
GET /api/leads/:id
```

### Update Lead

```http
PUT /api/leads/:id
```

### Delete Lead

```http
DELETE /api/leads/:id
```

### Search Leads

```http
GET /api/leads?search=john
```

### Filter Leads

```http
GET /api/leads?status=Qualified
```

### Pagination

```http
GET /api/leads?page=1&limit=5
```

### Statistics

```http
GET /api/leads/stats
```

### Health Check

```http
GET /api/health
```

---

## Local Installation

### Clone Repository

```bash
git clone https://github.com/Sanwariya-Sukhwal/lead-management-crm.git

cd lead-management-crm
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5000

DB_HOST=your_database_host
DB_PORT=5432
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

## Database Setup

Create table:

```sql
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    company VARCHAR(100),
    status VARCHAR(50) DEFAULT 'New',
    notes TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Live Application

### Frontend

https://lead-management-crm-one.vercel.app/

### Backend

https://lead-management-crm-uu2x.onrender.com

### Health Check

https://lead-management-crm-uu2x.onrender.com/api/health

---

## Future Enhancements

* User Authentication
* JWT Authorization
* Role-Based Access Control
* Export Leads to Excel/PDF
* Email Notifications
* Lead Activity Tracking
* Dark Mode Support
* Lead Assignment System

---

## Submission

### GitHub Repository

https://github.com/Sanwariya-Sukhwal/lead-management-crm

### Live Frontend

https://lead-management-crm-one.vercel.app/

### Live Backend

https://lead-management-crm-uu2x.onrender.com
