const express = require("express");
const cors = require("cors");

const app = express();

const auditRoutes = require("./routes/auditRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", auditRoutes);

// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "🚀 Page Pulse API is running..."
    });
});

// 404 Route Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

module.exports = app;