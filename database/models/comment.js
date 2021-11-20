import mongoose from 'mongoose';

const Comment = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  nick: {
    type: String,
  },
});

export default mongoose.model('Comment', Comment);
