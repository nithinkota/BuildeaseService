const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const architectureSchema = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    imgUrl:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
});

var collectionName = 'architecture'
module.exports = Architecture = mongoose.model("Architecture", architectureSchema, collectionName);