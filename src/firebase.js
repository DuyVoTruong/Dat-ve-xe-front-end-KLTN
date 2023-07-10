// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLJSSojjT0USLTcdIkwIpwn_I58qXCxuw",
  authDomain: "uploadimage-83b65.firebaseapp.com",
  projectId: "uploadimage-83b65",
  storageBucket: "uploadimage-83b65.appspot.com",
  messagingSenderId: "279748985451",
  appId: "1:279748985451:web:375879929e7dd8e311a72e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);