//User:dbuser
//Password:VRV7F695ulvumohn
//mongodb+srv://dbuser:<db_password>@clustercomp229.lyj2k.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCOMP229
let config = require('./config')

//Database setup
const mongoose = require('mongoose')

module.exports = function(){
    mongoose .connect(config.ATLASDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console,'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log("====> Connected to MongoDB.");
    })
}
