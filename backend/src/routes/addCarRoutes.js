import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import User from "../models/user.js";

import Car from "../models/car.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get All Cars
router.route("/").get(async (req, res) => {
  const { location } = req.query;
  if (location) {
    try {
      const cars = await Car.find({ location: location, rented: false }).exec();
      res.status(200).json({ success: true, data: cars });
    } catch (error) {
      res.status(500).json({ success: false, messege: error });
    }
  } else {
    try {
      const cars = await Car.find({ rented: false });
      res.status(200).json({ success: true, data: cars });
    } catch (error) {
      res.status(500).json({ success: false, messege: error });
    }
  }
});

router.route("/user-cars").get(async (req, res) => {
  const { _id } = req.query;
  try {
    const cars = await Car.find({ userOwner: _id }).exec();
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, messege: error });
  }
});

router.route("/search").get(async (req, res) => {
  const { search } = req.query;
  if (search) {
    try {
      const cars = await Car.find({ title: search, rented: false }).exec();
      res.status(200).json({ success: true, data: cars });
    } catch (error) {
      res.status(500).json({ success: false, messege: error });
    }
  } else {
    try {
      const cars = await Car.find({ rented: false });
      res.status(200).json({ success: true, data: cars });
    } catch (error) {
      res.status(500).json({ success: false, messege: error });
    }
  }
});

router.route("/id").get(async (req, res) => {
  const { id } = req.query;
  if (id) {
    try {
      const cars = await Car.find({ _id: id, rented: false }).exec();
      res.status(200).json({ success: true, data: cars });
    } catch (error) {
      res.status(500).json({ success: false, messege: error });
    }
  } else {
    try {
      const cars = await Car.find({ rented: false });
      res.status(200).json({ success: true, data: cars });
    } catch (error) {
      res.status(500).json({ success: false, messege: error });
    }
  }
});

// Create a Post
router.route("/").post(async (req, res) => {
  try {
    // Destructure what were getting from the front end
    const {
      title,
      brand,
      price,
      capacity,
      type,
      location,
      photo,
      userOwner,
      rented,
      photoPreview,
    } = req.body;

    const lowerTitle = title.toLowerCase();

    const newCarPost = await Car.create({
      title: lowerTitle,
      brand,
      price,
      capacity,
      type,
      location,
      userOwner,
      photo,
      rented,
    });

    res.status(200).json({ success: true, data: newCarPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to create a new car post, please try again",
    });
  }
});

//DELETE A CAR
router.delete("/", async (req, res) => {
  const { _id } = req.query;

  try {
    const deletedDocument = await Car.findByIdAndDelete(_id);
    res.json(deletedDocument);
  } catch (error) {
    res.status(500).send("Error deleting document:", error);
  }
});

//add car that the user have rented
router.put("/rented", async (req, res) => {
  try {
    const cars = await Car.findById(req.body.ids);
    const users = await User.findById(req.body.users);
    cars.rented = true;
    users.rentedCars.push(cars);
    await users.save();
    await cars.save();
    console.log("car is rented");
    res.json({ rentedCars: users.rentedCars });
  } catch (error) {
    res.json(error);
  }
});

//get all user's rented cars
router.get("/myrentals/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const myrentals = await Car.find({
      _id: { $in: user.rentedCars },
    });
    res.json({ data: myrentals });
  } catch (error) {}
});

//edit a car
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, brand, capacity, price, location, type, photo, photoPreview } =
    req.body;

  try {
    const updatedEntry = await Car.findByIdAndUpdate(
      id,
      { title, brand, capacity, price, location, type, photo, photoPreview },
      { new: true }
    );
    res.json(updatedEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
