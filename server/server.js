import express from "express";
import "dotenv/config";
import pg from "pg";
const { Pool } = pg;

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ success: "server is working" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
