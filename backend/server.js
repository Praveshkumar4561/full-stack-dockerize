const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
    ],
  })
);

app.get("/api/message", (req, res) => {
  res.json("message received successfully");
});

app.get("/api/greet", (req, res) => {
  res.json("good morning sir");
});

app.listen(1700, "0.0.0.0", () => {
  console.log("server is running on port 1700");
});
