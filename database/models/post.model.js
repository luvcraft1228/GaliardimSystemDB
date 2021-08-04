const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const Post = mongoose.model("Post", schema);
module.exports = Post;
