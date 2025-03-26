const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
require("./Models/db");
const AuthRouter = require("./Routes/AuthRouter")
const ProductRouter = require("./Routes/ProductRouter")
const PORT = process.env.PORT || 8080;

app.get("/", function(req,res){
    res.send("hello its working");
})
    
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


app.listen(PORT, ()=>{
    console.log("server is running on 8080");
})