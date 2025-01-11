const mongoose = require('mongoose');

const pollData = new mongoose.Schema({
    name:{
        type:String,
    },
    quetion: {
        type: String,
        required: true,
    },
    option: {
        type: [String], // Keep as an array if it stores multiple options
        required: true,
    },
    views:{
        type:Number,
        default:0,
    }
    ,
    selectedOptions:{
        type:[String],
    }
    
});

const Poll = mongoose.model('Poll', pollData);
module.exports = Poll;
