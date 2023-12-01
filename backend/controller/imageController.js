const { sql } = require("../config/pgDb");

const upload = async (req, res) => {
  console.log("IMAGE", req.file);
  console.log("IMAGE", req.body);
  const { userID } = req.params;
  // const image = req.file;
  // const img = Buffer.from();
  // await sql`UPDATE users SET avatar_img=${}`;
  // const datas = await sql`SELECT * FROM users`;

  res.status(201).json({ message: "success" });
};

module.exports = { upload };
