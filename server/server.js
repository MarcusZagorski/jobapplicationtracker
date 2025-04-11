import express from "express";
import "dotenv/config";
import pg from "pg";
import argon2 from "argon2";
const { Pool } = pg;

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const db = new Pool({
  connectionString: process.env.DB_STRING,
});

app.post("/login", async (req, res) => {
  try {
    const loginField = req.body;
    const loginCredentials = await db.query("SELECT * FROM login WHERE email = $1", [loginField.email]);
    const verifyPassword = await argon2.verify(loginCredentials.rows[0].hash_pass, loginField.password);

    if (verifyPassword) {
      res.json({ success: true, message: "Login successful!" });
    } else {
      res.json({ success: false, message: "Login was unsuccessful! Try again." });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
