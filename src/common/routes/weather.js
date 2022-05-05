const { Router } = require('express');

const {
  getWeather
} = require('../../domain/weather/controller/weather.controller');

const { WEATHER_PATH } = require('../constants/constants');

const router = Router();

/**
 * @swagger
 * /v1/current:
 *  get:
 *    description: Get location
 *    responses:
 *      200:
 *        description: success location
 */
/**
 * @swagger
 * /v1/current/{city}:
 *  get:
 *    description: Get location
 *    parameters:
 *    - in: path
 *      name: city
 *      type: string
 *      required: true
 *      default: Cordoba
 *      description: ciudad
 *    responses:
 *      200:
 *        description: success location
 */
router.get(`${WEATHER_PATH}`, getWeather);

module.exports = router;
