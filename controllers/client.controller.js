const ClientService = require('../services/client.services')

exports.findAll = async (req, res) => {
    try{
        console.log("Getting clients list")
        var page = req.params.page ? req.params.page : 1
        var limit = req.params.limit ? req.params.limit : 10
        var clients = await ClientService.getList({}, page, limit)
        res.status(200).json({status: 200, data: clients, message: "Successfully retrieved consultants list"})
    } catch(err) {
        res.status(400).json({status:400, message: err.message})
    }
}

exports.findOne = async (req, res) => {
    try{
        console.log("Fetching data for " + req.params.clientId)
        res.json(await ClientService.getById(req.params.clientId))
    } catch(err) {
        res.json({message: err})
    }
}

exports.createClient = async (req, res) => {
    try{
        res.json(await ClientService.create(req, res))
    } catch(err) {
        res.json({message: err})
    }
}

exports.updateClient = async (req, res) => {
    try{
        res.json(await ClientService.update(req, res))
    } catch(err) {
        res.json({message: err})
    }
}

exports.deleteClient = async (req, res) => {
    try{
        res.json(await ClientService.delete(req, res))
    } catch(err) {
        res.json({message: err})
    }
}