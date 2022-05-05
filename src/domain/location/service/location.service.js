const axios = require('axios');

const { LOCATION_URL } = require('../../../common/constants/constants.js');

const apiLocation = async () => {
  try {
    const instance = axios.create({
      baseURL: LOCATION_URL,
    });

    const resp = await instance.get();
    return {
      pais: resp.data.country,
      ciudad: resp.data.city,
      provincia: resp.data.regionName,
      codigo_postal: resp.data.zip,
      lat: resp.data.lat,
      lon: resp.data.lon,
    };
  } catch (error) {
    return error;
  }
};

module.exports = { apiLocation };
