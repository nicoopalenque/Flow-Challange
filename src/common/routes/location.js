const { Router } = require('express');

const {
  getLocation
} = require('../../domain/location/controller/location.controller');
const { LOCATION_PATH } = require('../constants/constants');

const router = Router();

/**
 * @swagger
 *  /v1/location:
 *    get:
 *     description: Get location
 *     responses:
 *        200:
 *          description: success location
 */
router.get(`${LOCATION_PATH}`, getLocation);

module.exports = router;
