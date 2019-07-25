// console.log('First Commit');

const express = require('express');
const app = express();
app.use(express.static('./public'));

app.get('/', (req,res)=>{
    res.send('Hello home page');
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

