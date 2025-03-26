const jwt = require('jsonwebtoken')

const ensureAthenticated = (req,res,next) => {
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403)
        .json({message:"Unauthorized, token is required"})
    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err){
        return res.status(401)
        .json({message:"Unauthorized, token is wrong or expired"})
    }
}

module.exports = ensureAthenticated;