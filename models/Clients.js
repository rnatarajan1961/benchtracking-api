const mongoose = require('mongoose')

const ClientsSchema = new mongoose.Schema({
    googleId: {
        type: String
    },
    clientName: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Clients', ClientsSchema)