import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/user.js";
import verify from "../middleware/verify.js";
import upload from "../middleware/multer.js";
import CarModel from "../models/car.js";

const router = express.Router();

router.post("/api/refresh", async (req, res) => {
  try {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.status(401).json("Access Denied");

    const existingUser = await User.findOne({ refreshToken });
    if (!existingUser)
      return res.status(403).json("Refresh token is not valid");

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, user) => {
        if (err) return err;
        const newAccessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "1h",
        });
        const newRefreshToken = jwt.sign(
          user,
          process.env.REFRESH_TOKEN_SECRET
        );

        await User.updateOne(
          { _id: existingUser._id },
          { refreshToken: newRefreshToken }
        );
        res
          .status(200)
          .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("login");

    // Check if user already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      // Check if the provided password matches the hashed password in the database
      const isPasswordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (isPasswordMatch) {
        const accessToken = jwt.sign(
          existingUser.toJSON(),
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1h" }
        );
        const refreshToken = jwt.sign(
          existingUser.toJSON(),
          process.env.REFRESH_TOKEN_SECRET
        );
        await User.updateOne({ _id: existingUser._id }, { refreshToken });
        res.json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          user: existingUser,
        });
      } else {
        res.status(400).json("username or password incorrect");
        console.log("username or password incorrect");
      }
    } else {
      res.status(400).json("username or password incorrect");
      console.log("username or password incorrect");
    }
  } catch (error) {
    // User not found, notify the user
    res.status(400).json("username or password incorrect");
    console.log("username or password incorrect");
  }
});

router.post("/api/logout", verify, async (req, res) => {
  const refreshToken = req.body.token;
  await User.updateOne({ refreshToken }, { $unset: { refreshToken: "" } });
  res.status(200).json("Logged out");
});

router.delete("/api/users/:id", verify, (req, res) => {});

router.post("/api/signup", upload.single("file"), async (req, res) => {
  try {
    const { username, password, firstName, lastName, title } = req.body;
    const avatar = req.file ? req.file.path : null;

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json("Username already exists");
    } else {
      // Hash the password before saving the new user
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create and save the new user with the hashed password
      const newUser = new User({
        username,
        password: hashedPassword,
        firstName,
        lastName,
        title,
        avatar,
      });
      await newUser.save();

      // Generate access and refresh tokens
      const accessToken = jwt.sign(
        newUser.toJSON(),
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      const refreshToken = jwt.sign(
        newUser.toJSON(),
        process.env.REFRESH_TOKEN_SECRET
      );

      newUser.refreshToken = refreshToken;
      await newUser.save();

      res.json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: newUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
