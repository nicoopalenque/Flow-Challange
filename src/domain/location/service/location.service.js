const axios = require('axios');

const { LOCATION_URL } = require('../../../common/constants/constants.js');

const apiLocation = () => {
  return axios.get(LOCATION_URL)
    .then((response) => {
      return {
        pais: response.data.country,
        ciudad: response.data.city,
        provincia: response.data.regionName,
        codigo_postal: response.data.zip,
        lat: response.data.lat,
        lon: response.data.lon,
      };
    });
};

module.exports = { apiLocation };
