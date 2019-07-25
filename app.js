// console.log('First Commit');

const express = require('express');
const app = express();

app.locals.pretty = true;

app.set('view engine', 'jade');
app.set('views','./views');
app.use(express.static('./public'));

app.get('/template',function(req,res){
    res.render('temp',{'time':Date(),'_title':'Hello Jade'});
})
app.get('/', (req,res)=>{
    res.send('Hello home page');
});

app.get('/topic',(req,res)=>{
    var senddata_id = req.query.id
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...',
    ];
    var output = `
        <a href='/topic?id=0'>Javascript</a><br>
        <a href='/topic?id=1'>Nodejs</a><br>
        <a href='/topic?id=2'>Express</a><br><br>
        ${senddata_id}
    `;
    
    res.send(output);
});

app.get('/dynamic', (req,res)=>{
    var lis = '';
    for(var i =0 ; i < 5 ; i++)
    {
        lis = lis + '<li>coding</li>';
    }

    var time = Date();
    var output = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Page Title</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
        <script src='main.js'></script>
    </head>
    <body>
        Hello, Dynamic!
        <ul>${lis}</ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
});

app.get('/route', (req,res)=>{
    res.send('Hello Router, <img src="/route.png">');
});

app.get('/login',(req,res)=>{
    res.send('<h1>Login please</h1>');
});

app.listen(3000,()=>{
    console.log('Hello world');
});

