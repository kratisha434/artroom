import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">ArtRoom</h1>
      <div className="flex gap-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800 px-2 py-1">Home</Link>
        <Link to="/journal" className="text-blue-600 hover:text-blue-800 px-2 py-1">Journal</Link>
        <Link to="/doodle" className="text-blue-600 hover:text-blue-800 px-2 py-1">Doodle</Link>
        <Link to="/poetry" className="text-blue-600 hover:text-blue-800 px-2 py-1">Poetry</Link>
        <Link to="/mood" className="text-blue-600 hover:text-blue-800 px-2 py-1">Mood</Link>
        <Link to="/login" className="text-blue-600 hover:text-blue-800 px-2 py-1">Login</Link>
        <Link to="/register" className="text-blue-600 hover:text-blue-800 px-2 py-1">Register</Link>
      </div>
    </nav>
  );
}
export default Navbar;