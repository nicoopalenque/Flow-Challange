const { response } = require('express');
const { apiWeather } = require('../service/weather.service');

const getWeather = async (req, res = response) => {
  const { city } = req.params;

  const response = await apiWeather(city);
  res.json(response);
};

module.exports = {
  getWeather
};