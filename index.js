const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const connectToMongo = require("./db");

connectToMongo();
const PORT = process.env.PORT || 3000; // Note: Changed port to 8081

const userRoutes = require("./routes/UserRoutes");
const policyRoutes = require("./routes/PolicyRoutes");
const authRoutes = require("./routes/AuthRoutes");
const claimRoutes = require("./routes/ClaimRoutes");
const purchaseRoutes = require("./routes/PurchaseRoutes");


//cross origin resource sharing
const corsOption={
  origin:"http://localhost:5173",
  method:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
};
app.use(cors(corsOption));
// Middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/claims", claimRoutes);
app.use("/api/purchase", purchaseRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, this is claim management system backend");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
