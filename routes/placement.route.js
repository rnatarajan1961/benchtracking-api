const express = require('express')
const router = express.Router()

// import from controller
const { findAll, findOne, createPlacement, updatePlacement, deletePlacement } = require('../controllers/placement.controller');

// @desc  Gets back clients list
// @router GET /
router.get('/', findAll)

// @desc  Gets back a specific client record
// @router GET /dashboard
router.get('/:placementId', findOne)

// @desc Saves the new Consultant info
// @router POST /
router.post('/', createPlacement)

// @desc Update a Consultant info
// @router PATCH /
router.patch('/:placementId', updatePlacement)

// @desc Delete a Consultant info
// @router DELETE /
router.delete('/:placementId', deletePlacement)


module.exports = router