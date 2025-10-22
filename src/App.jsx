// src/App.jsx
import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer"; // cuando lo tengas

export default function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer /> {/* Puedes comentar esto si aún no tienes Footer */}
      </div>
    </div>
  );
}
