// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold text-gray-800">ArtRoom</h1>
  <div className="flex justify-evenly gap-0 w-3/5">
    <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
    <Link to="/journal" className="text-blue-600 hover:text-blue-800">Journal</Link>
    <Link to="/doodle" className="text-blue-600 hover:text-blue-800">Doodle</Link>
    <Link to="/poetry" className="text-blue-600 hover:text-blue-800">Poetry</Link>
    <Link to="/mood" className="text-blue-600 hover:text-blue-800">Mood</Link>
    <Link to="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
  </div>
</nav>

  );
}
