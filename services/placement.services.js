var Placement = require('../models/Placements.js')

exports.getList = async (query, page, limit) => {
    try{
        return await Placement.find(query)
    } catch(err) {
        throw Error("Error while Paginating Placement List")
    }
}

exports.getById = async (query) => {
    try{
        return await Placement.findById(query)
    } catch(err) {
        throw Error("Error while getting Placement By ID")
    }
}

exports.create = async (req, res) => {
    
    const placement = new Placement({
        consultantId: req.body.consultantId,
        clientId: req.body.clientId,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    })

    try{
        res.json(await placement.save())
    } catch(err) {
        res.json({message: err})
    }
}

exports.update = async (req, res) => {

    try{
        console.log("Updating placement info for " + req.params.placementId)
        const resp = await Placement.updateOne({_id: req.params.placementId}, {
            $set: {
                clientName: req.body.clientName,
                status: req.body.status
            }
        })
        if(resp.matchedCount = 1) res.status(200).json("Update successful")
    } catch(err) {
        res.json({message: err})
    }
}

exports.delete = async (req, res) => {
    try{
        console.log("Removing placement info for " + req.params.placementId)
        const deletedData = await Placement.findById(req.params.placementId)
        const resp = await Placement.deleteOne({_id: req.params.placementId})
        if(resp.deletedCount == 0) res.status(404).json("Deletion not performed.  Invalid id specified")
        else res.status(200).json(deletedData)
    } catch(err) {
        res.json({message: err})
    }

}