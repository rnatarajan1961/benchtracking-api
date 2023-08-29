const express = require('express')
const router = express.Router()

// import from controller
const { findAll, findOne, createConsultant, updateConsultant, deleteConsultant } = require('../controllers/consultant.controller');

// @desc  Gets back consultants list
// @router GET /
router.get('/', findAll)

// @desc  Gets back a specific consultant record
// @router GET /dashboard
router.get('/:consultantId', findOne)

// @desc Saves the new Consultant info
// @router POST /
router.post('/', createConsultant)

// @desc Update a Consultant info
// @router PATCH /
router.patch('/:consultantId', updateConsultant)

// @desc Delete a Consultant info
// @router DELETE /
router.delete('/:consultantId', deleteConsultant)


module.exports = router