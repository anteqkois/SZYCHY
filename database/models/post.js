import mongoose from 'mongoose';

const Post = mongoose.Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  nick: {
    type: String,
  },
  contentPost: {
    type: String,
  },
});

export default mongoose.model('Post', Post);
