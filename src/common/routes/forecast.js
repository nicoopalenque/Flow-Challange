const { Router } = require('express');

const {
  getForecast
} = require('../../domain/forecast/controller/forecast.controller');

const { FORECAST_PATH } = require('../constants/constants');


const router = Router();

/**
 * @swagger
 * /v1/forecast:
 *  get:
 *    description: Get location
 *    responses:
 *      200:
 *        description: success location
 */
/**
 * @swagger
 * /v1/forecast/{city}:
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
router.get(`${FORECAST_PATH}`, getForecast);

module.exports = router;
