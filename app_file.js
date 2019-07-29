const express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended: false}));


app.set('views','./views_file');
app.set('view engine','jade');

app.get('/topic/new',(req,res)=>{
    res.render('new');
});

app.get('/topic',(req,res)=>{
    
    fs.readdir('data',(err,files)=>{
        if(err)
        {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }

        res.render('view',{'topics':files});
    });
    
});

app.post('/topic',(req,res)=>{
    var title = req.body.title;
    var description = req.body.description;

    fs.writeFile('data/'+title,description, (err)=>{
        if(err)
        {
            res.status(500).send('Internal Server Error')
        }

        res.send('Success!');
    });
});

app.listen(3000, ()=>{
    console.log('Connected, 3000 Port');
});