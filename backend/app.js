const express = require("express");
const { sql } = require("./config/pgDb");
const cors = require("cors");

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use("api/user", Userroute);

// app.get("/", async (req, res) => {
//   try {
//     const result = await sql`SELECT * FROM employee LIMIT 5`;
//     console.log("answer", result);
//     res.send("hello g1");
//   } catch (error) {
//     res.send.status(400).send("aldaa garlaa dahin oroldono uu");
//   }
// });

app.post("/api/signup", async (req, res) => {
  const newUSer = { ...req.body };
  console.log("answer", result);
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server ${PORT} дээр аслаа`);
});
