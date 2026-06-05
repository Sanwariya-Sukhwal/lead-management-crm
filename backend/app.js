const express = require("express");
const cors = require("cors");

const leadRoutes = require("./routes/leadRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// Health Check API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server Running Successfully"
  });
});

// Lead Routes
app.use("/api/leads", leadRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;