import mongoose, { Schema } from "mongoose";
const userEmailSchema = new Schema({
 email: String,
});
const UserEmail =
  mongoose.models.UserEmail || mongoose.model("UserEmail", userEmailSchema);
export default UserEmail;
