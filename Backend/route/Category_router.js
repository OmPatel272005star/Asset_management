const express=require('express');
const Category_router=express.Router();

const {addCategory, updateCategory, deleteCategory, }=require('../controller/Category_controller');


Category_router.post('/addcategory',addCategory);
Category_router.put('/updatecategory/:categoryId',updateCategory);
Category_router.delete('/deletecategory/:categoryId',deleteCategory);
module.exports=Category_router;