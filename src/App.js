import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Story from "./components/Story";
import Login from "./components/Login"
import Products from "./components/Products";

import "./App.css";

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />  
      </Routes>

      <Story/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;