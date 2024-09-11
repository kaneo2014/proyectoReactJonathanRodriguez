import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPoTMUviCukc4owuwgXeDywx9H2Sg5JV4",
  authDomain: "proyecto-react-jonathan.firebaseapp.com",
  projectId: "proyecto-react-jonathan",
  storageBucket: "proyecto-react-jonathan.appspot.com",
  messagingSenderId: "247087826872",
  appId: "1:247087826872:web:309a2e926df725aa04314d"
};

const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
