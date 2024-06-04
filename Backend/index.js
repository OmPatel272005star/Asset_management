const connection=require('./connection');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());

const Employee_Router=require('./route/Employee_router');
const Category_router=require('./route/Category_router');


app.use('/employee',Employee_Router);
app.use('/category',Category_router);

app.listen(3000,()=>{
    console.log(`express server is running on port 3000`);
})
