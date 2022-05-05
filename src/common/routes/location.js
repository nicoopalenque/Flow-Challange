const { Router } = require('express');

const {
  getLocation
} = require('../../domain/location/controller/location.controller');

const router = Router();

/**
 * @swagger
 * /v1/location:
 *  get:
 *    description: Get location
 *    responses:
 *      200:
 *        description: success location
 */
router.get('/location', getLocation);

module.exports = router;
