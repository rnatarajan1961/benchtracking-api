const ConsultantService = require('../services/consultant.services')

exports.findAll = async (req, res) => {
    try{
        console.log("Getting consultants list")
        var page = req.params.page ? req.params.page : 1
        var limit = req.params.limit ? req.params.limit : 10
        var consultants = await ConsultantService.getList({}, page, limit)
        res.status(200).json({status: 200, data: consultants, message: "Successfully retrieved consultants list"})
    } catch(err) {
        res.status(400).json({status:400, message: err.message})
    }
}

exports.findOne = async (req, res) => {
    try{
        console.log("Fetching data for " + req.params.consultantId)
        res.json(await ConsultantService.getById(req.params.consultantId))
    } catch(err) {
        res.json({message: err})
    }
}

exports.createConsultant = async (req, res) => {
    console.log("creating consultant record")
    try{
        res.json(await ConsultantService.create(req, res))
    } catch(err) {
        res.json({message: err})
    }
}

exports.updateConsultant = async (req, res) => {
    try{
        res.json(await ConsultantService.update(req, res))
    } catch(err) {
        res.json({message: err})
    }
}

exports.deleteConsultant = async (req, res) => {
    try{
        res.json(await ConsultantService.delete(req, res))
    } catch(err) {
        res.json({message: err})
    }
}