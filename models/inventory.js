let mongoose = require('mongoose');
const { collection } = require('./users');

let inventoryModel = mongoose.Schema({
    item: String,   
    qty: Number,      
    tags:[],
    status: String,
    size:{
        h:Number,
        w:Number,
        uom:String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    collection: 'inventory'
});

module.exports = mongoose.model('Inventory', UserSchema);   
