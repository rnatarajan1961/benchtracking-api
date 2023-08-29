const express = require('express')
const router = express.Router()

// import from controller
const { findAll, findOne, createClient, updateClient, deleteClient } = require('../controllers/client.controller');

// @desc  Gets back clients list
// @router GET /
router.get('/', findAll)

// @desc  Gets back a specific client record
// @router GET /dashboard
router.get('/:clientId', findOne)

// @desc Saves the new Consultant info
// @router POST /
router.post('/', createClient)

// @desc Update a Consultant info
// @router PATCH /
router.patch('/:clientId', updateClient)

// @desc Delete a Consultant info
// @router DELETE /
router.delete('/:clientId', deleteClient)


module.exports = router