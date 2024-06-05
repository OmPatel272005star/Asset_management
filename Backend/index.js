const connection=require('./connection');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());

const Employee_router=require('./route/Employee_router');
const Category_router=require('./route/Category_router');
const Asset_router=require('./route/Asset_router');
const Allocation_router=require('./route/Allocation_router')
const Document_router=require('./route/Document_router');

app.use('/employee',Employee_router);
app.use('/category',Category_router);
app.use('/asset',Asset_router);
app.use("/allocate",Allocation_router);
app.use('/document',Document_router);

app.listen(3000,()=>{
    console.log(`express server is running on port 3000`);
});
