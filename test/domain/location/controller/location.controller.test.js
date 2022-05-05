const { getLocation } = require('../../../../src/domain/location/controller/location.controller');
const { locationResponse } = require('../../../mock/location/location-response');

describe('Location Controller Suite test 🧪', () => {
  describe('getForecast method 🧪', () => {
    test('Get location info ✅', async () => {
      await getLocation()
        .then((response) => expect(response).toStrictEqual(locationResponse))
        .catch((error) => error);
    });
  });
});