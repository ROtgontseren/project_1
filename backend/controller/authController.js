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
      await sql`SELECT name,email,password FROM users WHERE email=${userEmail}`;
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
const catadd = async (req,res) => {
  try {
    const{name,description,category_image,category_color} = req.body;
  await sql`INSERT INTO categories(name,description,category_image,category_color) VALUES (${name},${description},${category_image},${category_color})`
  res.status(201).json({ message: "success", name,description,category_color }); 
  } catch (error) {
    res.status(500).json({ message: "Failed"}); 
  }
};
const catput = async (req,res) => {
  try {
    const { id } = req.body;
    const users = 
    await sql`SELECT * FROM categories WHERE id=${id}`;
    let index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return res.status(200).json({ message: `${id} тай хэрэглэгч олдсон.` });
    } else {
      users[index] = { ...users[index], ...req.body };
      `SELECT * FROM categories`;
      res.status(200).json({
        message: `${id} тай хэрэглэгчийг шинэчиллээ.`,
        user: users[index],
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const catdel = async (req,res) =>{
  try {
    const {id} =req.body;
    const findUser = 
    await sql`SELECT * FROM categories WHERE id=${id}`
    const index = findUser.findIndex((el) => el.id === id);
    if (index < 0) {
      res.status(400).json({ message: `${id} тай хэрэглэгч олдсонгүй.` });
    } else {
      findUser.splice(index, 1);
      `SELECT * FROM categories`;
      res.status(200).json({ message: `${id} тай хэрэглэгч устгалаа.` });
    }
  } catch (error) {
    res.status(500).json({ message: "failed", });
  }
};
module.exports = { signup, signin, catadd, catput, catdel };
