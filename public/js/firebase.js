// js/firebase.js

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgO6Tig6uWBdrEGFuCRcS45SC5rQ5nEyI",
    authDomain: "charmsync.firebaseapp.com",
    projectId: "charmsync",
    storageBucket: "charmsync.firebasestorage.app",
    messagingSenderId: "109688788362",
    appId: "1:109688788362:web:21f4e2e5b379613fbca473",
    measurementId: "G-NCMVBS4Q08"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Export db so you can use it in other scripts
export { db };