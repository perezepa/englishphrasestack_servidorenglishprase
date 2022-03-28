import mongoose from 'mongoose';

const englishSchema = mongoose.Schema({
  verb: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  type: {
    type: String,
    require: true,
    trim: true,
  }
});

const Phrases = mongoose.model("Phrases", englishSchema);
export default Phrases;
