const { apiWeather } = require('../../../../src/domain/weather/service/weather.service');
const { weatherResponse } = require('../../../mock/weather/weather-response');
const { weatherCityResponse } = require('../../../mock/weather/weather-city-response');
const { weatherErrorResponse } = require('../../../mock/weather/weather-error-response');

describe('Weather service suite test 🧪', () => {
  describe('apiWeather method 🧪', () => {
    test('should respond with weather info ✅', async () => {
      await apiWeather('')
        .then((response) => expect(response).toStrictEqual(weatherResponse))
        .catch((error) => error);
    });

    test('should respond with city weather info ✅', async () => {
      await apiWeather('cordoba')
        .then((response) => expect(response).toStrictEqual(weatherCityResponse))
        .catch((error) => error);
    });

    test('should respond with error ❌', async () => {
      await apiWeather('jujuy')
        .then((response) => response)
        .catch((error) => expect(error).toStrictEqual(weatherErrorResponse));
    });
  });
});