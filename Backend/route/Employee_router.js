const express=require('express');
const Employee_Router=express.Router();

const { addEmployee } = require('../controller/Employee_controller');

Employee_Router.post('/add',addEmployee)


module.exports=Employee_Router;