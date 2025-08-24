import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/HomePages/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Customers from "./Pages/Customers/Customers";
import ScrollToTop from "./Components/ScrollToTop";  

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/blog" element={<Blog />} />
          <Route path="/customers" element={<Customers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
