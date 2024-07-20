import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: [{ type: String }],
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
