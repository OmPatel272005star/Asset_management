const connection=require('./connection');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log(`express server is running on port 3000`);
})