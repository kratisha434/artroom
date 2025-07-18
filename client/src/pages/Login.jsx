 import { useState } from "react";
 import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
         email,
         password 
        });
     
        

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful", data);
        localStorage.setItem("token", data.token || "dummy-token");
        alert("Welcome, " + (data.user?.email || "User"));
        // TODO: Navigate to home or dashboard
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login to ArtRoom</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full mb-6 p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
