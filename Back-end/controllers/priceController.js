const pricesData = require("../data/pricesData");

exports.getPricesByCity = (req, res) => {
  const city = req.query.city?.toLowerCase();

  if (!city) {
    return res.status(400).json({
      success: false,
      message: "Parameter city wajib diisi"
    });
  }

  const data = pricesData[city];

  if (!data) {
    return res.status(404).json({
      success: false,
      message: `Data harga tidak ditemukan untuk kota: ${city}`
    });
  }

  return res.json({
    success: true,
    city: city,
    count: data.length,
    data
  });
};
