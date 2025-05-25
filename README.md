# 📝 Firebase Notes App

A React-based notes application powered by Firebase. Users can write and manage team notes and messages in real-time, with a secure and advanced authentication system. The app supports multiple login methods including Google login, email/password sign-up, and includes full account management features.

## 🚀 Features

- 🔐 **Advanced Authentication System:**
  - Google Sign-In
  - Email & Password Sign-Up and Login
  - Re-authentication for sensitive operations
  - Persistent login sessions using Firebase Auth
  - Real-time authentication state tracking using `react-firebase-hooks`

- 🧠 **Notes Management:**
  - Add and store notes with live form input
  - Each note is user-specific and securely stored
  - Firestore / Realtime Database storage with real-time syncing

- 📡 **Realtime Sync via WebSockets:**
  - Firebase Firestore or Realtime Database uses WebSockets under the hood
  - Real-time updates across all user sessions and devices

## ⚙️ Tech Stack

- React.js (Functional Components + Hooks)
- Firebase Authentication
- Firebase Firestore or Realtime Database
- WebSockets (via Firebase)
- react-firebase-hooks

