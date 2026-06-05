# Lead Management CRM

## Overview

Lead Management CRM is a full-stack web application that helps businesses manage customer leads efficiently. Users can create, view, update, delete, search, and filter leads through a simple and responsive dashboard.

---

## Features

### Lead Management

* Add New Lead
* View All Leads
* Update Lead Details
* Delete Lead
* Search Leads
* Filter Leads by Status

### Dashboard

* Lead Statistics
* Total Leads Count
* Status-wise Lead Count
* Responsive UI

### Advanced Features

* Pagination
* Sorting
* Search Functionality
* Status Filtering

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

* PostgreSQL

---

## Project Structure

lead-management-crm/

frontend/

* src/components
* src/pages
* src/services
* src/utils

backend/

* config
* controllers
* routes
* middleware
* database

---

## API Endpoints

### Create Lead

POST /api/leads

### Get All Leads

GET /api/leads

### Get Lead By ID

GET /api/leads/:id

### Update Lead

PUT /api/leads/:id

### Delete Lead

DELETE /api/leads/:id

### Search Leads

GET /api/leads?search=john

### Filter Leads

GET /api/leads?status=Qualified

### Pagination

GET /api/leads?page=1&limit=5

### Statistics

GET /api/leads/stats

---

## Installation

### Clone Repository

git clone <repository-url>

cd lead-management-crm

---

## Backend Setup

cd backend

npm install

Create .env file

PORT=5000

DB_HOST=localhost

DB_PORT=5432

DB_USER=postgres

DB_PASSWORD=postgres

DB_NAME=leadcrm

Run Backend

npm run dev

---

## Frontend Setup

cd frontend

npm install

Create .env file

VITE_API_URL=http://localhost:5000/api

Run Frontend

npm run dev

---

## Database Setup

Create PostgreSQL Database

CREATE DATABASE leadcrm;

Run schema.sql file:

backend/database/schema.sql

---

## Testing

Backend:

http://localhost:5000/api/health

Frontend:

http://localhost:5173

---

## Future Enhancements

* User Authentication
* JWT Security
* Role-Based Access
* Export Leads to Excel
* Email Notifications
* Lead Activity Tracking
* Dark Mode

---

## Author

Sanwariya Sukhwal

Full Stack Developer

---

## Submission

GitHub Repository:
(Add GitHub Repository Link)

Live Frontend:
(Add Vercel Link)

Live Backend:
(Add Render Link)
