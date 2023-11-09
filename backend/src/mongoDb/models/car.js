import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Car = new Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  price: {type: String, required: true},
  capacity: {type: String, required: true},
  type: { type: String, required: true },
  location: { type: String, required: true },
  photo: { type: String, required: true },

  // make: String,
  // description: String,
  // transmission: String,
  // gasoline: Number,
  // discount: Number,
});

const CarSchema = mongoose.model("Car", Car);

export default CarSchema;
