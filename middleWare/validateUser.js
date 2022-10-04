const users = require('../models/defineUser');

// validating user
const validateUser = async(req, res, next) =>{
    
    const userId = req.header('userId');
    let userInfo = await users.findOne({id: userId});

    if(!userInfo) {
        res.status(401).json({
            success: false,
            message: "Invalid userId..."
        })
    } else{
        next();
    }
}

// exporting module
module.exports = validateUser;