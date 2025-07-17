import mongoose from 'mongoose';

const JournalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  entry: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isPublic: {
    type: Boolean,
    default: false,
  }
});

const Journal = mongoose.model('Journal', JournalSchema);
export default Journal;
