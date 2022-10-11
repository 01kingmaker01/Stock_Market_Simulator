import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // date: Date.now()
});

const User = models.User || model("User", userSchema);

export default User;
