const mongoose = require('mongoose')

const PlacementsSchema = new mongoose.Schema({
    googleId: {
        type: String
    },
    consultantId: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Placements', PlacementsSchema)