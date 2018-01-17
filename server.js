const express = require('express');
const app = express();




//Home Route
app.get('/', (req,res) =>{
    res.render('index.ejs')
});

app.get('*', (req,res) =>{
    res.send("404 not found")
});


app.listen(3000,() =>{
    console.log("Sever listening at port 3000")
});