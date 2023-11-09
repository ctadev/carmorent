import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./config/database.js";
import addCarRoutes from "./routes/addCarRoutes.js";
import authRoutes from "./routes/auth.js";
import carRoutes from "./routes/car.js";
import stripeRoute from "./routes/stripe.js";

dotenv.config();

const app = express();

connectDB();
app.listen(5000, () => console.log("listening to port 5000"));

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/addCarRoutes", addCarRoutes);

app.use("/create-checkout-session", stripeRoute);
app.use(authRoutes);
app.use(carRoutes);
