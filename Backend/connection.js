const mysql=require('mysql2');

const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'om@272005',
    database:'assetmanagementdb'
})

const connection=mysqlConnection.connect((err)=>{
    if(err){
        console.log('error in DB connection'+JSON.stringify(err,undefined,2));
    }else{
        console.log('DB connected successfully');
    }
});

module.exports=connection;

