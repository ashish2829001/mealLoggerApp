const mongoose = require('mongoose');

// food_items schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

const foodItems = mongoose.model('food_items',userSchema);
module.exports = foodItems;