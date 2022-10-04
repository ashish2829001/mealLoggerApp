const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
});

const users = mongoose.model('users',userSchema);
module.exports = users;