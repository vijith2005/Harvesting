import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/test", (req, res) => {
//   console.log("Received Data:", req.body);

  const data = req.body;

  res.status(200).json({ message: "Data received successfully", data });
});

app.get("/", (req, res) => {
  res.send("Pico Multi-Sensor API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});