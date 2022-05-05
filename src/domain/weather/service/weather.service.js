const axios = require('axios');

const { WEATHER_URL } = require('../../../common/constants/constants.js');
const { apiLocation } = require('../../location/service/location.service');

const apiWeather = async (city) => {
  let location;
  let params;

  if (!city) {
    location = await apiLocation();
    params = {
      lat: location.lat,
      lon: location.lon,
      lang: 'es',
      units: 'metric',
      appid: '02993bf258dc8960cb4974810beb2fdf',
    };
  } else {
    params = {
      q: city,
      lang: 'es',
      units: 'metric',
      appid: '02993bf258dc8960cb4974810beb2fdf',
    };
  }

  return axios.get(`${WEATHER_URL}/weather`, { params })
    .then((response) => {
      return {
        ciudad: response.data.name,
        descripcion: response.data.weather[0].description,
        clima: {
          maxima: response.data.main.temp_max,
          minima: response.data.main.temp_min,
          sensacion_termica: response.data.main.feels_like,
          humedad: response.data.main.humidity,
        }
      };
    })
    .catch((error) => {
      return error.response.data;
    });
};

module.exports = { apiWeather };