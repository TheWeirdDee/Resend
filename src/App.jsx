import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/HomePages/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ScrollToTop from "./Components/ScrollToTop"; // 👈 import it

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
