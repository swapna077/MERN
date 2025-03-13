import mongoose from "mongoose";

const travelLogSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  image: String,
  rating: Number,
});

export default mongoose.model("TravelLog", travelLogSchema);
