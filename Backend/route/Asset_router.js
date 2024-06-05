const express=require('express');
const Asset_router=express.Router();
const {AddAsset,updateAsset,deleteAsset}=require('../controller/Asset_controller');

Asset_router.post('/addasset',AddAsset)
Asset_router.put('/updateasset/:id',updateAsset);
Asset_router.delete('/deleteAsset/:id',deleteAsset);


module.exports=Asset_router;