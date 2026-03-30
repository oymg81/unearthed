# WEB103 Project 3 - Unearthed

Submitted by: Oscar Mochizaki

---

## 📌 Overview

Unearthed is a **full-stack web application** that allows users to browse and view gift ideas. The app retrieves gift data from a **PostgreSQL database** through a **REST API built with Express**, and displays it dynamically using **React**.

Users can:

* View a list of gifts on the homepage
* Click on a gift to see detailed information
* Navigate using dynamic routes
* View a custom 404 page for invalid routes

---

## ⏱ Time Spent

8 hours

---

## ✅ Required Features

The following **required** functionality is completed:

* [x] **The web app uses React to display data from the API**
* [x] **The web app is connected to a PostgreSQL database with a structured gifts table**
* [x] **The web app displays a title**
* [x] **The web app displays a list of gifts retrieved from the database**
* [x] **Each gift links to a detailed view using dynamic routing (`/gift/:id`)**
* [x] **The web app includes a 404 page for invalid routes**
* [x] **Data is fetched from the backend using asynchronous API calls (fetch/async/await)**

---

## 🌟 Optional Features

* [x] Gift cards styled with reusable React components
* [x] Dynamic routing with React Router
* [x] Clean UI with CSS styling

---

## 🚀 Additional Features

* [x] Full CRUD API implemented in Express (GET, POST, PUT, DELETE)
* [x] Separation of frontend (React) and backend (Express)
* [x] PostgreSQL database hosted on Render
* [x] Environment variables for database configuration
* [x] Vite proxy configuration for API requests

---

## 🎥 Video Walkthrough

Here’s a walkthrough of the implemented features:

![Video Walkthrough](Week3.gif)

GIF created with Kap (macOS)

---

## 🧠 Notes

One challenge was connecting the React frontend with the Express backend using a proxy configuration. Another challenge was ensuring proper database queries and handling asynchronous data fetching without errors.

Additionally, debugging API responses (such as JSON parsing errors) required verifying that the backend server was running and returning valid JSON data.

---

## 🛠 Tech Stack

* React (Vite)
* Node.js + Express
* PostgreSQL (Render)
* JavaScript (ES6)
* HTML / CSS

---

## 📄 License

Copyright 2026 Oscar Mochizaki

Licensed under the Apache License, Version 2.0
http://www.apache.org/licenses/LICENSE-2.0
