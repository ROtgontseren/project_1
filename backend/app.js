const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/authRoutes");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа.`);
});
