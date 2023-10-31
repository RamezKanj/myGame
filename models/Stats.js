const mongoose = require('mongoose')

const statSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    score: {
        type: Integer,
        required: true
    },
    timer: {
        type: Integer,
        required:true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Stats', statSchema)