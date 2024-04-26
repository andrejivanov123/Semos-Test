const mongoose = require('mongoose');

const postSchemaAkademija = new mongoose.Schema({
  ime: {
    type: String,
  },
  adresa: {
    type: String,
  }
});

const postSchemaKurs = new mongoose.Schema({
  ime: {
    type: String,
  },
  adresa: {
    type: String,
  },
  oblast: {
    type: String,
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;