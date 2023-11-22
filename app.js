const express = require('express');
const path = require("path")
const app = express();
const fs = require("fs")
const port = 80;

app.use('/static' , express.static('static'))
app.use(express.urlencoded({ extended: true }));

// app.engine('pug', require('pug').__express)
// app.set('view engine', 'pug');
// app.set('views',path.join(__dirname,'views'))

app.get("/",(req,res) =>{
    const con = "this is the best tut"
    const params = {'title' : 'cr is the best game',"content" : con}
    res.status(200).render('mine.html',params)
});

app.listen(port,() =>{
    console.log(`The application started successfully${port}`);
})