import { useState, useEffect } from "react";

function Journal() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  });

  const [entry, setEntry] = useState("");

  // Fetch entry when date changes
  useEffect(() => {
    fetch(`http://localhost:5000/api/journals/${selectedDate}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.content) {
          setEntry(data.content);
        } else {
          setEntry("");
        }
      })
      .catch((err) => {
        console.error("Error fetching journal:", err);
      });
  }, [selectedDate]);

  const handleChange = (e) => {
    const newEntry = e.target.value;
    setEntry(newEntry);
  };

  const handleSave = () => {
    fetch("http://localhost:5000/api/journals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: selectedDate,
        content: entry,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Saved:", data);
        alert("Journal saved!");
      })
      .catch((err) => {
        console.error("Error saving journal:", err);
        alert("Failed to save");
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">📝 Journal</h2>

      <div className="mb-4 text-center">
        <label className="mr-2 font-medium">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <textarea
        className="w-full h-64 p-4 border border-gray-300 rounded-lg shadow resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Write your thoughts for the selected day..."
        value={entry}
        onChange={handleChange}
      ></textarea>

      <button
        onClick={handleSave}
        className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Save
      </button>
    </div>
  );
}

export default Journal;
