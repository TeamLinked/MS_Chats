const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MessageSchema = new Schema({
    "transmitter": String,
    "receiver": String,
    "message": String,
    "date": { 
        type: Date, default: Date.now 
    }
})

module.exports=mongoose.model('message',MessageSchema);