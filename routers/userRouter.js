const express = require('express');
const mealLog = require('../models/defineLog');
const hashTags = require('../models/defineHashTags');
const foodItems = require('../models/defineFood');
const uniqid = require('uniqid');
const validateUser = require('../middleWare/validateUser');
const validatefoodItems = require('../middleWare/validateFoodItems');
const validateHashTags = require('../utils/validateHashTags');

const router = new express.Router();

// get log by id
router.get('/logById', async (req, res) => {

    try{
        
        if(!req.query.id) {
            res.status(401).json({
                success: false,
                message: "Bad Request(no id found)"
            })
        }
        
        const mealLogData = await mealLog.findOne({id: req.query.id});
        
        if(!mealLogData) {
            res.status(401).json({
                success: false,
                message: "Incorrect id..."
            })
        }
        res.status(200).json({
            success: true,
            message: "Sucessfully fetched!",
            mealLog: mealLogData
        });
    } catch(e) {
        res.status(500).json({
            success: true,
            message: 'Internal server error...',
            error: e
        });

    }
});

// get logs by user id
router.get('/logsByUserId', async (req, res) => {
    try{
        
        if(!req.query.userId) {
            res.status(401).json({
                success: false,
                message: "Bad Request(no userId found)"
            })
        }
        
        const mealLogData = await mealLog.find({userId: req.query.userId});
        
        let msg = 'Sucessfully fetched!';
        if(!mealLogData || mealLogData.length === 0) {
            msg = 'No such data in db';
        }
        res.status(200).json({
            success: true,
            message: msg,
            mealLog: mealLogData
        });
    } catch(e) {
        res.status(500).json({
            success: true,
            message: 'Internal server error...',
            error: e
        });

    }
})

// get all hashtags 
router.get('/getAllHashTags', async (req, res) => {
    
    try{    
        const data = await hashTags.find({});
        
        let msg = 'Sucessfully fetched!';
        if(!data || data.length === 0) {
            msg = 'No such data in db';
        }

        res.status(200).json({
            success: true,
            message: msg,
            hashTags: data
        });
    } catch(e) {
        res.status(500).json({
            success: true,
            message: 'Internal server error...',
            error: e
        });

    }
})

// get all food items
router.get('/getAllFoodItems', async (req, res) => {
    try{    
        const data = await foodItems.find({});
        
        let msg = 'Sucessfully fetched!';
        if(!data || data.length === 0) {
            msg = 'No such data in db';
        }

        res.status(200).json({
            success: true,
            message: msg,
            foodItems: data
        });
    } catch(e) {
        res.status(500).json({
            success: true,
            message: 'Internal server error...',
            error: e
        });

    }
})

// add a new meal log
router.post('/addMealLog', validateUser, validatefoodItems, async (req, res) => {
    
    try{
        if(!req.body.foodItems || !req.body.hashTags || req.body.foodItems.length === 0 || req.body.hashTags.length === 0) {
            res.status(401).json({
                success: false,
                message: "Please provide required data..."
            })
        }
        validateHashTags(req.body.hashTags);
        let mealLogInfo = new mealLog({
            id: uniqid(),
            userId: req.header('userId'),
            foodItems: req.body.foodItems,
            hashTags: req.body.hashTags,
            timeStamp: (new Date()).getTime()
        });
        
        await mealLogInfo.save();
    
        res.status(200).json({
            success: true,
            message: 'Sucessfully added!',
            mealLogInfo: mealLogInfo
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error...",
            error: err
        })
    }
})

// exporting module
module.exports = router;