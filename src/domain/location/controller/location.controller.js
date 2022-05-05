const { response } = require('express');
const { apiLocation } = require('../service/location.service');

const getLocation = async (req, res = response) => {
  const response = await apiLocation();
  res.json(response);
};

module.exports = {
  getLocation
};