import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

function Journal() {
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [journals, setJournals] = useState([]);

  const fetchJournals = async () => {
    try {
      const res = await axios.get('https://artroom.onrender.com/api/journal');
      setJournals(res.data);
    } catch (err) {
      console.error('Error fetching journals:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", title, entry);
    try {
      await axios.post('/', { title, entry });
      setTitle('');
      setEntry('');
      fetchJournals(); // Refresh list
    } catch (err) {
      console.error('Error submitting journal:', err);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Write a Journal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="What's on your mind?"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Entry
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Previous Entries</h3>
        {journals.map((j, idx) => (
          <div key={idx} className="border p-4 mt-2 rounded bg-gray-50">
            <h4 className="font-bold">{j.title}</h4>
            <p>{j.entry}</p>
            <small className="text-gray-500">
              {new Date(j.date).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Journal;
