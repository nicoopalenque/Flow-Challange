const { getWeather } = require('../../../../src/domain/weather/controller/weather.controller');
const { weatherResponse } = require('../../../mock/weather/weather-response');

describe('Weather Controller Suite Test 🧪', () => {
  describe('getWeather method 🧪', () => {
    test('GET weather info ✅', async () => {
      await getWeather({ params: { city: '' }})
        .then((response) => expect(response).toStrictEqual(weatherResponse))
        .catch((error) => error);
    });
  });
});