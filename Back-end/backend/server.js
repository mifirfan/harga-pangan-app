const express = require("express");
const cors = require("cors");
const priceRoutes = require("../routes/prices");

const app = express();
const PORT = 3000;
const path = require("path");


app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/prices", priceRoutes);

app.get("/", (req, res) => {
  res.send("Live Commodity Price Tracker API");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
