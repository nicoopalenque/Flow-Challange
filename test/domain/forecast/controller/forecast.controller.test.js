const { getForecast } = require('../../../../src/domain/forecast/controller/forecast.controller');
const { forecastResponse } = require('../../../mock/forecast/forecast-response');

describe('Forecast Controller suite test 🧪', () => {
  describe('getForecast method 🧪', () => {
    test('GET forecast info ✅', async () => {
      await getForecast({ params: { city: '' }})
        .then((response) => expect(response).toStrictEqual(forecastResponse))
        .catch((error) => error);
    });
  });
});