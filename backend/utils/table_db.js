const { sql } = require("../config/pgDb");

// const createTables = async () => {
//   console.log("CREATING TABLE...");
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
//   await sql`DROP TABLE IF EXISTS users`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS users(
//             id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
//             email VARCHAR(50) UNIQUE NOT NULL,
//             name VARCHAR(50) NOT NULL,
//             password TEXT NOT NULL,
//             avatarImg TEXT,
//             createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
//   `;
//   console.log("CREATED TABLE.");
// };

// // const insertData = () => {};

// createTables();
// insertData();

// const createCategories = async () => {
//   console.log("createcategories...");
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
//   await sql`
//     CREATE TABLE categories(
//             id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
//             name VARCHAR(100),
//             description TEXT,
//             createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             category_image TEXT,
//             category_color TEXT)`;
//   console.log("created table.");
// };
// createCategories();

const createTransaction = async () => {
  await sql`
  CREATE TABLE transaction (
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id uuid,
        name TEXT,
        amount REAL NOT NULL, 
        transaction_type transaction_type,
        description TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_id uuid,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(category_id) REFERENCES categories(id)
  );`;
  console.log("transaction", createTransaction);
};
createTransaction();
