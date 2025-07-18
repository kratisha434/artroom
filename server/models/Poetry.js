import mongoose from 'mongoose';

const PoetrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poem: { 
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  
});

const Poetry = mongoose.model('Poetry', PoetrySchema);
export default Poetry;
