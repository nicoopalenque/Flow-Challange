const LOCATION_URL = 'http://ip-api.com/json';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5';

const API_ID = process.env.API_ID;
const LANG = process.env.LANG;
const UNITS = process.env.UNITS;
const NODE_ENV = process.env.NODE_ENV || 'development';
const HOST = process.env.HOST || '0.0.0.0';
const SERVER_PORT = process.env.PORT || 3000;

const ROOT_PATH = '/v1';
const LOCATION_PATH = '/location';
const WEATHER_PATH = '/current/:city?';
const FORECAST_PATH = '/forecast/:city?';

module.exports = {
  LOCATION_URL,
  WEATHER_URL,
  API_ID,
  LANG,
  UNITS,
  NODE_ENV,
  HOST,
  SERVER_PORT,
  ROOT_PATH,
  LOCATION_PATH,
  WEATHER_PATH,
  FORECAST_PATH
};
