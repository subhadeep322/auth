const mongoose  = require('mongoose');

const mongo_uri = process.env.MONGO_CONN;

mongoose.connect(mongo_uri)
  .then(()=>{
    console.log(" mongodb connected");
  }).catch((err)=>{
    console.log('mongodb connection error:',err);
  })