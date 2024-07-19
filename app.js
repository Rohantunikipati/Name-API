import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name", (req, res) => {
  const obj = { name: "Rohan", age: 19 };
  res.send(obj);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
