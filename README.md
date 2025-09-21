# MERN CRUD Demo – Single File Setup

This repository demonstrates a **minimal MERN stack CRUD application** with everything in **one file** for backend and frontend. It’s ideal for learning, prototyping, or sharing as a GitHub Gist.

---

## 🔹 Features

**Backend (`index.js`)**  
- MongoDB connection & schema/model setup  
- CRUD routes for `User` (`Create`, `Read`, `Update`, `Delete`)  
- Middleware setup (`express.json()`, `cors`)  
- Fully self-contained server  
- ✅ Run with: `node index.js`  

**Frontend (`App.tsx`)**  
- Axios setup & API calls  
- Create, Read, Update, Delete operations in **one file**  
- Minimal functional styling (no CSS framework required)  
- `editingId` toggles between **create** and **update** mode  
- Fetches latest data automatically after every operation  
- ✅ Run with: `npm i vite@latest` + `npm run dev`  

---

## 🔹 Backend Setup

1. Initialize project:

```bash
npm init -y
npm i express mongoose cors
````

2. Create `index.js`:

```js
// See index.js file in repo (all-in-one backend with CRUD)
```

3. Start server:

```bash
node index.js
```

Server runs on `http://localhost:5000` and connects to local MongoDB.

---

## 🔹 Frontend Setup

1. Initialize Vite React + TypeScript project:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install axios
```

2. Replace `App.tsx` with the **all-in-one CRUD frontend** file.

3. Start the frontend:

```bash
npm run dev
```

Open `http://localhost:5173` (or as Vite outputs) to view the app.

---

## 🔹 How It Works

* **Backend:** Handles CRUD with MongoDB and Express. Single file for simplicity.
* **Frontend:** Single React component handles API calls, renders users, allows editing/deleting.
* **Data Flow:** After every create/update/delete, frontend fetches the latest user list.

---

## 🔹 Tech Stack

* **Frontend:** React + TypeScript + Axios
* **Backend:** Node.js + Express + Mongoose
* **Database:** MongoDB
* **Package Manager:** npm

---

## 🔹 Notes

* Minimal styling for clarity; can be enhanced with Tailwind, Material-UI, or other CSS frameworks.
* Ideal for learning CRUD flow or sharing as a demo/Gist.
* All code is self-contained for quick setup.
