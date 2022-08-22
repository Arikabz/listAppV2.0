
const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    itemNo: {
        type: Integer,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('List',ListSchema)
