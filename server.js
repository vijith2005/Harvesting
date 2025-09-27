import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

let latestData = null;

app.post("/test", (req, res) => {
  console.log("📡 Received Data:", req.body);

  latestData = {
    ...req.body,
    timestamp: new Date().toISOString()
  };

  res.status(200).json({
    message: "✅ Data received successfully",
    received: latestData
  });
});

app.get("/fetch", (req, res) => {
  if (latestData) {
    res.json(latestData);
  } else {
    res.status(404).json({ message: "⚠️ No data available yet" });
  }
});

app.get("/", (req, res) => {
  res.send("🌱 Pico Multi-Sensor API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
