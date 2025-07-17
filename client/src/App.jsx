import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Doodle from "./pages/Doodle";
import Poetry from "./pages/Poetry";
import Mood from "./pages/Mood";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/doodle" element={<Doodle />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
