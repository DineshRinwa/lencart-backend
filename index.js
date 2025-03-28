require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

// 🔹 Middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(cookieParser());

// 🔹 Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// 🔹 Base Route
app.get((req, res) => {
  req.send("✅ Welcome to the Home Page!");
});

// 🔹 Define Port
const PORT = process.env.PORT || 5000;

// 🔹 Start Server
app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
