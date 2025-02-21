# 🏋️ Workout Tracker - MERN Stack Application

A **full-stack workout tracker** designed to help users **log, track, and manage their workouts** efficiently. This application allows users to **create an account, log in securely, and add workouts** with details like exercise name, load, and reps.

Once logged in, users can **add, view, and delete workouts** seamlessly, and all data is stored in a **secure cloud database**.

With **automatic updates on AWS EC2**, the application **instantly reflects any new deployments**, ensuring a smooth user experience without manual intervention.

---

## 🌟 Features

- ✅ **User Authentication** – Signup, login, and secure access to personal workouts  
- ✅ **Workout Management** – Add, view, and delete workouts dynamically  
- ✅ **Real-time Updates** – Workouts appear instantly after adding or removing them  
- ✅ **Global State Management** – Uses React Context API for seamless state handling  
- ✅ **Secure API Requests** – JWT authentication protects user data  
- ✅ **Automatic AWS Deployment** – Push changes to GitHub, and the website updates itself  

---

## 🛠️ Tech Stack

- **MongoDB** – NoSQL database to store users and workouts  
- **Express.js** – Handles API routes and authentication  
- **React.js** – Frontend framework for an interactive UI  
- **Node.js** – Backend server to process requests  
- **JWT (JSON Web Tokens)** – Secure user authentication  
- **bcrypt.js** – Password hashing for security  
- **Nginx** – Reverse proxy for better performance  
- **PM2** – Keeps the backend running even after system restarts  
- **AWS EC2** – Cloud hosting with auto-updates using GitHub webhooks  

---

## 🛠️ Setup & Installation (Deployed on AWS EC2)

This application is **already deployed** on an AWS EC2 instance, so users only need the **website URL** to start using it. However, if you want to **set up or update the deployment**, follow these steps:

### 1️⃣ Connect to Your AWS EC2 Instance

ssh -i your-key.pem ubuntu@your-ec2-ip
### 2️⃣ Update the Application

Navigate to the project directory and pull the latest code:

cd ~/mern-workout-tracker
git pull origin main

### 3️⃣ Restart the Backend
cd backend
npm install
pm2 restart mern-backend

### 4️⃣ Deploy the Frontend
Copy
Edit
cd ../frontend
npm install
npm run build
sudo systemctl restart nginx

### 5️⃣ Automate Future Updates
Instead of manually deploying, the server automatically updates when new code is pushed to GitHub. The webhook script ensures changes are pulled and deployed instantly.

## 🌎 How This Helps End Users

- 🔹 **Organized Tracking** – Users can log their workouts without relying on notes  
- 🔹 **Cloud-based Access** – No need to install anything, workouts are saved online  
- 🔹 **Data Security** – Passwords are encrypted, and authentication ensures privacy  
- 🔹 **Real-time Updates** – No need to refresh; workouts appear dynamically  
- 🔹 **Fast & Reliable** – Deployed on AWS for high availability  

---

## 🚀 Ready to Use  

Simply visit **[your deployed website URL]** to start logging workouts today! 💪✨  

