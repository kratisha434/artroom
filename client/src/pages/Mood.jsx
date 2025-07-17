import { useState } from "react";

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

  const handleSave = () => {
    const moodEntry = {
      mood: selectedMood,
      note,
      date: new Date().toLocaleDateString()
    };
    console.log("Mood Saved:", moodEntry);
    alert("Mood saved (check console)");
    setNote("");
    setSelectedMood(null);
  };

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
    </div>
  );
}
export default Mood;
