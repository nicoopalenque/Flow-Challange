const { response } = require('express');
const { apiWeather } = require('../service/weather.service');

const getWeather = async (req, res = response) => {
  const { city } = req.params;

  const response = await apiWeather(city);
  res.status(parseInt(response.cod)).json(response);
};

module.exports = {
  getWeather
};