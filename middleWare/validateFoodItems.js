const foodItems = require('../models/defineFood');

// verify foodItems
const validatefoodItems = async(req, res, next) =>{

    let errorMessage = "";
    for(let foodItem of req.body.foodItems) {
        let data = await foodItems.findOne({name: foodItem});
        if(!data) {
            errorMessage += " " + foodItem;
        }
    }
    if(errorMessage !== "") {
        res.status(401).json({
            success: false,
            message: errorMessage + " not in the food list..."
        })
    } else {
        next();
    }
}

// exporting module
module.exports = validatefoodItems;