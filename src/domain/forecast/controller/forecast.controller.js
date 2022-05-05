const { response } = require('express');
const { apiForecast } = require('../service/forecast.service');

const getForecast = async (req, res = response) => {
  const { city } = req.params;

  const response = await apiForecast(city);
  res.status(parseInt(response.cod)).json(response);

};

module.exports = {
  getForecast
};
