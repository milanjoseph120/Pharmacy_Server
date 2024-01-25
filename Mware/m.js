// importing jwt web token

const jwt = require('jsonwebtoken')

const middleware =(req,res,next)=>{
    console.log('inside middleware');

    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);

    try {
        const jwtResponse = jwt.verify(token,"supersecretkey12345")
        console.log(jwtResponse);
        req.payload = jwtResponse.adminID
        next()
    } catch (err) {
        res.status(401).json('Authorization failed...Please login')
    }
    
}

module.exports = middleware