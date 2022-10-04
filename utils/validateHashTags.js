const hashTags = require('../models/defineHashTags');

// verify user
const validateHashTags = async(hashItems) =>{
    
    try {
        for(let hash of hashItems) {
            let data = await hashTags.findOne({name: hash});
            if(!data) {
                let newHashTag = new hashTags({name: hash});
                await newHashTag.save();
            }
        }
        return;
    } catch (error) {
        throw error;
    }
}

// exporting module
module.exports = validateHashTags;