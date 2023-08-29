var Client = require('../models/Clients')

exports.getList = async (query, page, limit) => {
    try{
        return await Client.find(query)
    } catch(err) {
        throw Error("Error while Paginating Client List")
    }
}

exports.getById = async (query) => {
    try{
        return await Client.findById(query)
    } catch(err) {
        throw Error("Error while getting Client By ID")
    }
}

exports.create = async (req, res) => {
    
    const client = new Client({
        clientName: req.body.clientName,
        status: req.body.status
    })

    try{
        res.json(await client.save())
    } catch(err) {
        res.json({message: err})
    }
}

exports.update = async (req, res) => {

    try{
        console.log("Updating client info for " + req.params.clientId)
        const resp = await Client.updateOne({_id: req.params.clientId}, {
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
        console.log("Removing client info for " + req.params.clientId)
        const deletedData = await Client.findById(req.params.clientId)
        const resp = await Client.deleteOne({_id: req.params.clientId})
        if(resp.deletedCount == 0) res.status(404).json("Deletion not performed.  Invalid id specified")
        else res.status(200).json(deletedData)
    } catch(err) {
        res.json({message: err})
    }

}