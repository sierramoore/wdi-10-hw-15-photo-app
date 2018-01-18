const express = require('express');
const router = express.Router();
const User = require('../models/userModel.js');


//Home Route
router.get('/', (req,res) =>{
    //empty brackets gets all data from users
    User.find({}, (err, allUsers) =>{
        res.render('./user/index.ejs',{
            users: allUsers
        })
    })

    // User.find({}, (err, allUsers) =>{
    //     res.render('./user/index.ejs',{
    //         users: allUsers
    //     })
    // })

});

//TODO show user info on user index page

router.post('/', (req,res) =>{


    // user.create is like -> variableNAme = new ClassNAme
    // User.create({username: 'bob', password: 123}, (err, newUsers) =>{
    //     res.send({error: err, user: newUsers})
    // })

    User.create(req.body, (err, newUsers) =>{
        if(err){
            res.send("<h1>Failed to create user account.</h1><br/>Error message: " + err.errmsg);
        }else{
            //res.send(newUsers.username + ' ' + newUsers.password + ' '+ newUsers._id)
            res.redirect('/user')
        }

    });

    // console.log("SNAP", req.body);
    // User.create(req.body, (err, newUserName) => {
    //     // if(err)console.log(err)
    //     console.log("ERR", err, "NEWU", newUserName)
    //     res.redirect('/user')
    // })

});


//Create Account Route
router.get('/new', (req,res) =>{
    res.render('./user/new.ejs')
});


// FUTURE SHOW ROUTE
// router.get('/:id', (req,res) =>{
//     User.findById(req.params.id, (err, foundUser) => {
//         res.render('./user/show.ejs', {
//             user: foundUser
//         })
//     })
// })




module.exports = router;