import { useState,useEffect } from "react";
import axios from "axios";


const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "🤩", label: "Excited" }
];

 function Mood() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]); 

  const handleSave = async () => {
  if (!selectedMood) return;

  const moodEntry = {
    mood: selectedMood.label,
    note
  };

  try {
    await axios.post("https://artroom.onrender.com/api/mood", moodEntry);
    alert("Mood saved!");
    setNote("");
    setSelectedMood(null);
    fetchMoods(); // to refresh the list
  } catch (err) {
    console.error("Error saving mood:", err);
    alert("Error saving mood.");
  }
};
const fetchMoods = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/mood");
      setEntries(res.data);
    } catch (err) {
      console.error("Error fetching moods:", err);
    }
  };

 useEffect(() => {
  fetch("http://localhost:5000/api/mood") 
    .then(res => res.json())
    .then(data => setEntries(data))
    .catch(err => console.error("Failed to fetch moods:", err));
}, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Track Your Mood 📊</h2>

      <div className="flex justify-center gap-4 mb-6">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => setSelectedMood(m)}
            className={`text-3xl p-2 rounded-full ${
              selectedMood?.label === m.label ? "bg-blue-200" : "hover:bg-gray-100"
            }`}
            title={m.label}
          >
            {m.emoji}
          </button>
        ))}
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a quick note about your mood..."
        className="w-full p-3 border rounded mb-4"
        rows={4}
      />

      <button
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        disabled={!selectedMood}
      >
        Save Mood
      </button>
      <h3 className="text-xl font-semibold mt-8 mb-4">🗓 Recent Entries</h3>
      {entries.map((entry) => (
        <div key={entry._id} className="border rounded p-3 mb-2 bg-white shadow">
          <p>
            <strong>{entry.mood}</strong>{" "}
            <span className="text-gray-500 text-sm">
              ({new Date(entry.createdAt).toLocaleString()})
            </span>
          </p>
          {entry.note && <p className="mt-1 text-gray-700">{entry.note}</p>}
        </div>
      ))}
    </div>
  );
}
export default Mood;
