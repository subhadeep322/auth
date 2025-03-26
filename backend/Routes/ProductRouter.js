const ensureAthenticated = require('../Middlewares/Auth');


const router = require('express').Router();


router.get('/',ensureAthenticated,(req,res)=>{
    res.status(200).json([
        {
            name: "mobile",
            price: 20000
        },
        {
            name: "laptop",
            price: 30000
        }
    ])
});


module.exports = router;