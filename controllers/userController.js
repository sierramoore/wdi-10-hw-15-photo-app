const express = require('express');
const router = express.Router();
const User = require('../models/userModel.js');

router.get('/', (req,res) =>{
    // console.log("yee");
    // res.send("yee")
    res.render('./user/index.ejs')
});






module.exports = router;