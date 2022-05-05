const { response } = require('express');
const { apiLocation } = require('../service/location.service');

const getLocation = async (req, res = response) => {
  const response = await apiLocation();
  res.status(response.cod).json(response);
};

module.exports = {
  getLocation
};