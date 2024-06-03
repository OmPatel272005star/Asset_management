const express=require('express');
const Employee_Router=express.Router();

const { addEmployee,deleteEmployee } = require('../controller/Employee_controller');

Employee_Router.post('/add',addEmployee)
Employee_Router.delete('/delete/:id',deleteEmployee);

module.exports=Employee_Router;