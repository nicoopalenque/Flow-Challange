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

  try {
    const instance = axios.create({
      baseURL: `${WEATHER_URL}/weather`,
      params
    });

    const resp = await instance.get();
    return {
      ciudad: resp.data.name,
      descripcion: resp.data.weather[0].description,
      clima: {
        maxima: resp.data.main.temp_max,
        minima: resp.data.main.temp_min,
        sensacion_termica: resp.data.main.feels_like,
        humedad: resp.data.main.humidity,
      }
    };
  } catch (err) {
    return err;
  }
};

module.exports = { apiWeather };