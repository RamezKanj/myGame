const { Int32 } = require('mongodb')
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const statsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    score: {
        type: Number,
        required: true
    },
    timer: {
        type: Number,
        required:true
    }
},
    {
        timestamps: true
    }
)

statsSchema.plugin(AutoIncrement, {
    inc_field: 'number',
    id: 'scoreNumber',
    start_seq: 1
})

module.exports = mongoose.model('Stats', statsSchema)