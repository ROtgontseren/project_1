const { sql } = require("../config/pgDb");
const brypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = brypt.hashSync(password, 10);
    await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPassword})`;
    res.status(201).json({ message: "success", name, email, password });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const signin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    const findUser =
      await sql`SELECT name,email,password FROM users WHERE emial=${userEmail}`;
    if (findUser.length === 0) {
      return res.status(400).json({ message: "хэрэглэгч олдсонгүй" });
    }

    const isCheck = brypt.compareSync(userPassword, findUser[0].password);

    if (!isCheck) {
      return res.status(400).json({ message: "wrong username or password" });
    }

    const { password, ...user } = findUser[0];

    res.status(201).json({ message: "success", user });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};
module.exports = { signup, signin };
