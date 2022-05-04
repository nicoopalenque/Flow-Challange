const { response } = require('express');

const getLocation = (req, res = response) => {
  res.json({
    message: 'location controller'
  })
}

module.exports = {
  getLocation
}