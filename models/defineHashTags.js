const mongoose = require('mongoose');

// hash_tags schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

const hashTags = mongoose.model('hash_tags',userSchema);
module.exports = hashTags;