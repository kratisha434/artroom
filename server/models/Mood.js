import mongoose from 'mongoose';

const moodSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Mood', moodSchema);
