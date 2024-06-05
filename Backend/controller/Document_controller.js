const multer = require('multer');
const path = require('path');
const connection = require('../connection');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,'../uploads'); 
    },
    filename: function(req, file, cb) {
        cb(null, req.body.DocumentName + '.' + req.body.DocumentFormat);
    }
});
const uploadDocument = multer({ storage: storage }).single('document');

const addDocument = async (req, res) => {
    const {DocumentId, AssetId, DocumentName, DocumentSize, DocumentFormat } = req.body;
    
    const sqlQuery = `INSERT INTO Document (DocumentId, AssetId, DocumentName, DocumentSize, DocumentFormat) 
                      VALUES (?, ?, ?, ?, ?)`;

    try {
         await new Promise((resolve, reject) => {
            connection.query(sqlQuery, [DocumentId, AssetId, DocumentName, DocumentSize, DocumentFormat], (err, result) => {
                if (err) {
                    console.error("Error in uploading file:", err);
                    reject("Failed to add document to the database");
                } else {
                    resolve("Document added successfully");
                }
            });
        });
        res.status(200).json({ message :"kjhbgf"});
    } catch (error) {
        res.status(500).json({ error });
    }
};

const deleteDocument = async (req, res) => {
    const { DocumentId } = req.params; // Extracting DocumentId from request parameters
    
    const sqlQuery = `DELETE FROM Document WHERE DocumentId = ?`;

    try {
        await new Promise((resolve, reject) => {
            connection.query(sqlQuery, [DocumentId], (err, result) => {
                if (err) {
                    console.error("Error in deleting document:", err);
                    reject("Failed to delete document from the database");
                } else {
                    if (result.affectedRows > 0) {
                        resolve("Document deleted successfully");
                    } else {
                        reject("Document with the specified ID not found");
                    }
                }
            });
        });
        res.status(200).json({ message: "Document deleted successfully" });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = {
    addDocument,
    uploadDocument,
    deleteDocument
};
