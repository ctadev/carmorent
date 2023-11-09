import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Car = new Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  photo: { type: String, required: true },
  date: { type: Array },
  rented: {type: Boolean, require: true},
  userOwner: {
    type: String,
    ref: "users",
    required: true,
  },
  // userRenting: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "users",
  // },
});

const CarSchema = mongoose.model("cars", Car);

export default CarSchema;
