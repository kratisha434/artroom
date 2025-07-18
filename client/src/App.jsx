import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Journal from "./pages/Journal";
import Doodle from "./pages/Doodle";
import Poetry from "./pages/Poetry";
import Mood from "./pages/Mood";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    
      <div className="min-h-screen">
        
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={
          <ProtectedRoute>
          <Journal />
          </ProtectedRoute>
  }
/>
<Route path="/doodle" element={
    <ProtectedRoute>
      <Doodle />
    </ProtectedRoute>
  }
/>
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
  
  );
}

export default App;
