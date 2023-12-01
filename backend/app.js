const express = require("express");
require("dotenv").config();
const path = require("path");

const userRoutes = require("./routes/authRoutes");
const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images/")));

app.use("/api/users", userRoutes);
app.use("/api/image", imageRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа.`);
});
