const { response } = require('express');
const { apiForecast } = require('../service/forecast.service');

const getForecast = async (req, res = response) => {
  const { city } = req.params;

  const response = await apiForecast(city);
  res.json(response);

};

module.exports = {
  getForecast
};
