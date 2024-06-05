const express=require('express');
const Document_router=express.Router();

const {addDocument,uploadDocument,deleteDocument}=require('../controller/Document_controller')

Document_router.post('/adddocument',uploadDocument);
Document_router.delete('/deletedocument/:DocumentId',deleteDocument);

module.exports=Document_router;
