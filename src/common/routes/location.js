const { Router } = require('express')

const {
	getLocation
} = require('../../domain/location/controller/location.controller')

const router = Router()


router.get('/location', getLocation)

module.exports = router
