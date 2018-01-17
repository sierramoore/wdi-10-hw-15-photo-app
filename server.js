const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');




require('./db/db.js');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const userController = require('./controllers/userController.js');
app.use('/user', userController);




//Home Route
app.get('/', (req,res) =>{
    res.render('index.ejs')
});

app.get('*', (req,res) =>{
    res.send("👽 404 👽")
});


app.listen(3000,() =>{
    console.log("Sever listening at port 3000")
});