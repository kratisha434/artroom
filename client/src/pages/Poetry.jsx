import { useState, useEffect } from "react";
import axios from "axios";

const prompts = [
  "A rainy evening", "Lost memories", "Whispers of the wind",
  "The last goodbye", "Childhood dreams", "Colors of silence",
  "Walking alone", "Echoes in the night", "A letter never sent"
];

function Poetry() {
  const [title, setTitle] = useState("");
  const [poem, setPoem] = useState("");
  const [prompt, setPrompt] = useState(prompts[0]);
  const [allPoems, setAllPoems] = useState([]); // Store fetched poems

  const handleSave = async () => {
    if (!title || !poem) {
      alert("Please fill both title and poem.");
      return;
    }

    try {
      const res = await axios.post("https://artroom.onrender.com/api/poetry", {
        title,
        poem,
      });
      alert("Poem saved successfully!");
      console.log(res.data);
      setTitle("");
      setPoem("");
      fetchAllPoems(); // Refresh list after saving
    } catch (error) {
      console.error("Error saving poem:", error);
      alert("Failed to save poem.");
    }
  };

  const fetchAllPoems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/poetry");
      setAllPoems(res.data.reverse()); // Reverse to show latest first
    } catch (err) {
      console.error("Error fetching poems:", err);
    }
  };

  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  useEffect(() => {
    fetchAllPoems();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Write a Poem ✍️</h2>

      <input
        type="text"
        placeholder="Poem Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />

      <textarea
        placeholder="Write your poem here..."
        rows={10}
        value={poem}
        onChange={(e) => setPoem(e.target.value)}
        className="w-full p-3 border rounded mb-4"
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-6"
      >
        Save Poem
      </button>

      <div className="bg-gray-100 p-4 rounded shadow mb-8">
        <h3 className="font-semibold mb-2">🪄 Prompt Inspiration</h3>
        <p className="italic text-gray-700 mb-2">{prompt}</p>
        <button
          onClick={generatePrompt}
          className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
        >
          Show Another Prompt
        </button>
      </div>

      <h3 className="text-xl font-bold mb-3">📜 Your Saved Poems</h3>
      {allPoems.length === 0 ? (
        <p className="text-gray-500">No poems saved yet.</p>
      ) : (
        allPoems.map((poemItem) => (
          <div key={poemItem._id} className="mb-4 p-3 border rounded shadow-sm bg-white">
            <h4 className="text-lg font-semibold">{poemItem.title}</h4>
            <p className="whitespace-pre-line text-gray-700">{poemItem.poem}</p>
            <p className="text-xs text-gray-400 mt-1">
              Saved on {new Date(poemItem.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Poetry;
