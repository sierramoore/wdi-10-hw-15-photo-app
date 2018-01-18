const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');




require('./db/db.js');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


// same as router -> stores expotred router from userController file into userController
const userController = require('./controllers/userController.js');
app.use('/user', userController);




//Home Route
app.get('/', (req,res) =>{
    res.render('index.ejs')
});


app.listen(3001,() =>{
    console.log("Sever listening at port 3000")
});