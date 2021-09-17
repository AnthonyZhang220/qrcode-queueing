const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let now = new Date();

const ItemSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    phone:{
        type: String,
        required: true
    },

    numberofpeople:{
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema)