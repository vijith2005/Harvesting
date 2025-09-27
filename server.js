import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse JSON requests
app.use(express.json());

// in-memory storage for sensor data
let sensorData = [];

// 🌱 Route to receive Pico sensor data
app.post("/test", (req, res) => {
  console.log("📡 Received Data:", req.body);

  const data = {
    ...req.body,
    timestamp: new Date().toISOString() // add a timestamp
  };

  // save to memory
  sensorData.push(data);

  res.status(200).json({
    message: "✅ Data received successfully",
    received: data
  });
});

// 🌱 Route to fetch all stored sensor data
app.get("/fetch", (req, res) => {
  res.json({
    count: sensorData.length,
    data: sensorData
  });
});

// health check
app.get("/", (req, res) => {
  res.send("🌱 Pico Multi-Sensor API is running...");
});

app.listen(PORT, () => {
  console.log(🚀 Server running on port ${PORT});
});
