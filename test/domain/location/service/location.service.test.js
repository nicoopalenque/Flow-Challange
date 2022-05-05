const { apiLocation } = require('../../../../src/domain/location/service/location.service');
const { locationResponse } = require('../../../mock/location/location-response');

describe('Location Service suite test 🧪', () => {
  describe('apiLocation method 🧪', () => {
    test('should repond with location ✅', async () => {
      await apiLocation().then((response) => expect(response).toStrictEqual(locationResponse));
    });
  });
});