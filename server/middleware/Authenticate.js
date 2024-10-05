const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) =>{
    const token = req.headers['authorization']?.split('')[1];
    if(!token) 
        return res.sendStatus(401);

    jwt.verify(token, process.env.JSONWEBTOKEKEY, (err, user) => {
        if(err){
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}

module.exports = authenticate;