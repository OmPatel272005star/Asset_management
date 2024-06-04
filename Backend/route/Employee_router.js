const express=require('express');
const Employee_Router=express.Router();

const { addEmployee,deleteEmployee,updateEmployee,searchById, getAllEmployee } = require('../controller/Employee_controller');

Employee_Router.post('/add',addEmployee);
Employee_Router.get('/get/:id',searchById);
Employee_Router.get('/getAll',getAllEmployee)
Employee_Router.delete('/delete/:id',deleteEmployee);
Employee_Router.put('/update/:id',updateEmployee);
module.exports=Employee_Router;