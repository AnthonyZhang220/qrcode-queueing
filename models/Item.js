const mongoose = require('mongoose');
const moment = require('moment') 
const Schema = mongoose.Schema;

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
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
});

module.exports = Item = mongoose.model('item', ItemSchema)