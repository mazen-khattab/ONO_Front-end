import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Discounts from "./components/Discounts";
import Footer from "./components/Footer";
import LoginPage from "./components/Login";
import SocialIcons from "./components/SocialIcons";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Navbar />
              <Hero />
              <Products />
              <About />
              <Contact />
              <Discounts />
              <Footer />
              <SocialIcons />
            </div>
          }
        />
        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
