const { apiWeather } = require('../../../../src/domain/weather/service/weather.service');
const { weatherResponse } = require('../../../mock/weather/weather-response');
const { weatherCityResponse } = require('../../../mock/weather/weather-city-response');
const { weatherErrorResponse } = require('../../../mock/weather/weather-error-response');

describe('Weather service suite test ๐งช', () => {
  describe('apiWeather method ๐งช', () => {
    test('should respond with weather info โ', async () => {
      await apiWeather('')
        .then((response) => expect(response).toStrictEqual(weatherResponse))
        .catch((error) => error);
    });

    test('should respond with city weather info โ', async () => {
      await apiWeather('cordoba')
        .then((response) => expect(response).toStrictEqual(weatherCityResponse))
        .catch((error) => error);
    });

    test('should respond with error โ', async () => {
      await apiWeather('jujuy')
        .then((response) => response)
        .catch((error) => expect(error).toStrictEqual(weatherErrorResponse));
    });
  });
});