const axios = require('axios');

const { WEATHER_URL } = require('../../../common/constants/constants.js');
const { apiLocation } = require('../../location/service/location.service');

const apiForecast = async (city) => {
  let location;
  let params;

  if (!city) {
    location = await apiLocation();
    params = {
      lat: location.lat,
      lon: location.lon,
      lang: 'es',
      units: 'metric',
      cnt: 5,
      appid: '02993bf258dc8960cb4974810beb2fdf',
    };
  } else {
    params = {
      q: city,
      lang: 'es',
      units: 'metric',
      cnt: 5,
      appid: '02993bf258dc8960cb4974810beb2fdf',
    };
  }

  return axios.get(`${WEATHER_URL}/forecast`, { params })
    .then((response) => {
      const forecast = response.data.list.map((element) => {
        const weather = {};
        weather['fecha'] = element.dt_txt;
        weather['descripcion'] = element.weather.descripction;
        weather['max'] = element.main.temp_max;
        weather['min'] = element.main.temp_min;
        weather['sensacion_termica'] = element.main.feels_like;
        weather['humedad'] = element.main.humidity;
        return weather;
      });
      return {
        pais: response.data.city.country,
        ciudad: response.data.city.name,
        clima: forecast
      };
    })
    .catch((error) => {
      return error.response.data;
    });
  // try {
  //   const instance = axios.create({
  //     baseURL: `${WEATHER_URL}/forecast`,
  //     params
  //   });

  //   const resp = await instance.get();
  //   const forecast = resp.data.list.map((element) => {
  //     const weather = {};
  //     weather['fecha'] = element.dt_txt;
  //     weather['descripcion'] = element.weather.descripction;
  //     weather['max'] = element.main.temp_max;
  //     weather['min'] = element.main.temp_min;
  //     weather['sensacion_termica'] = element.main.feels_like;
  //     weather['humedad'] = element.main.humidity;
  //     return weather;
  //   });
  //   return {
  //     pais: resp.data.city.country,
  //     ciudad: resp.data.city.name,
  //     clima: forecast
  //   };
  // } catch (error) {
  //   return error;
  // }
};

module.exports = { apiForecast };