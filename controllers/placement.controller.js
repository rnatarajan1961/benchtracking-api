const PlacementService = require('../services/placement.services.js')

exports.findAll = async (req, res) => {
    try{
        console.log("Getting placement list")
        var page = req.params.page ? req.params.page : 1
        var limit = req.params.limit ? req.params.limit : 10
        var placements = await PlacementService.getList({}, page, limit)
        res.status(200).json({status: 200, data: placements, message: "Successfully retrieved consultants list"})
    } catch(err) {
        res.status(400).json({status:400, message: err.message})
    }
}

exports.findOne = async (req, res) => {
    try{
        console.log("Fetching data for " + req.params.placementId)
        res.json(await PlacementService.getById(req.params.placementId))
    } catch(err) {
        res.json({message: err})
    }
}

exports.createPlacement = async (req, res) => {
    try{
        res.json(await PlacementService.create(req, res))
    } catch(err) {
        res.json({message: err})
    }
}

exports.updatePlacement = async (req, res) => {
    try{
        res.json(await PlacementService.update(req, res))
    } catch(err) {
        res.json({message: err})
    }
}

exports.deletePlacement = async (req, res) => {
    try{
        res.json(await PlacementService.delete(req, res))
    } catch(err) {
        res.json({message: err})
    }
}