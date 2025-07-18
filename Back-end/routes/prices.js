// routes/prices.js
const express = require("express");
const router = express.Router();
const pricesData = require("../data/pricesData");

router.get("/", (req, res) => {
  const city = req.query.city?.toLowerCase();

  if (!city || !pricesData[city]) {
    return res.json({
      success: false,
      message: "Kota tidak ditemukan atau belum tersedia datanya.",
    });
  }

  res.json({
    success: true,
    data: pricesData[city],
  });
});

module.exports = router;
