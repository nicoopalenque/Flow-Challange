const { apiForecast } = require('../../../../src/domain/forecast/service/forecast.service');
const { forecastResponse } = require('../../../mock/forecast/forecast-response');
const { forecastCityResponse } = require('../../../mock/forecast/forecast-city-response');
const { forecastErrorResponse } = require('../../../mock/forecast/forecast-error-response');

describe('Forecast service suite test ๐งช', () => {
  describe('apiForecast method ๐งช', () => {
    test('shold respond with forecast info โ', async () => {
      await apiForecast('')
        .then((response) => expect(response).toStrictEqual(forecastResponse))
        .catch((error) => error);
    });

    test('shold respond with city forecast info โ', async () => {
      await apiForecast('cordoba')
        .then((response) => expect(response).toStrictEqual(forecastCityResponse))
        .catch((error) => error);
    });

    test('shold respond with city forecast info โ', async () => {
      await apiForecast('jujuy')
        .then((response) => response)
        .catch((error) => expect(error).toStrictEqual(forecastErrorResponse));
    });
  });
});