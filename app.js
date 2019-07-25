// console.log('First Commit');

const express = require('express');
const app = express();
app.use(express.static('./public'));

app.get('/', (req,res)=>{
    res.send('Hello home page');
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

