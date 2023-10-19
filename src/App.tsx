import React from "react";
import "./App.css";
import { Login } from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";

import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBv33q30MQRyNCj1du8K_TW4EZjXllUDkA",
  authDomain: "money-75de0.firebaseapp.com",
  projectId: "money-75de0",
  storageBucket: "money-75de0.appspot.com",
  messagingSenderId: "216500809871",
  appId: "1:216500809871:web:31ee0901bd65148ff5c0fa",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebaseAuth.initializeAuth(app);
firebaseAuth
  .signInWithEmailAndPassword(auth, "almirwebdev@gmail.com", "Almircr7")
  .then((user) => console.log(user))
  .catch((error) => console.log("error", error));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
