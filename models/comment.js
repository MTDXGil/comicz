import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  comicSlug: { type: String, required: true },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Comment =
  mongoose.models.comment || mongoose.model("comment", commentSchema);

export default Comment;
