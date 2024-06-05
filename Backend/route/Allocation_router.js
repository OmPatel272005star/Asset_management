const express=require('express');
const Allocation_router=express.Router();

const {addAllocation,updatAllocation}=require('../controller/Allocation_controller');

Allocation_router.post('/addallocation',addAllocation);
Allocation_router.put('/updateallocation/:id',updatAllocation);

module.exports=Allocation_router;
