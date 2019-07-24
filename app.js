// console.log('First Commit');

const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send('Hello home page');
});

app.get('/login',(req,res)=>{
    res.send('<h1>Login please</h1>');
});

app.listen(3000,()=>{
    console.log('Hello world');
});
