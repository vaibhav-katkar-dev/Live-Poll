const mongoose = require('mongoose');

const msgData = new mongoose.Schema({
    msg:{
        type:String,
    },
    name:{
        type:String,
    }
   
});

const Msg = mongoose.model('Msg', msgData);
module.exports = Msg;
