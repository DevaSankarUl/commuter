const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
require('dotenv').config();
module.exports={
    connectToDb:(cb)=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log("Connected To Db");
        return(cb)
})
.catch((err)=>{
    console.log(err);
    return cb(err)
})
}
}