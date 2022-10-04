const mongoose = require('mongoose');

// meal_log schema
const userSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    timeStamp:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    foodItems: {
        type: [String]
    },
    hashTags: {
        type: [String]
    }
});


const mealLog = mongoose.model('meal_log',userSchema);
module.exports = mealLog;