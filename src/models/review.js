import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  author: String,
  pictureUrl: String,
  position: String,
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
