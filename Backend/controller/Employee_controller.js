const connection = require('../connection');

const addEmployee = async (req, res) => {
    try {
      const { FirstName, LastName, Email, PhoneNo } = req.body;
      
      // Insert employee into the database
      await new Promise((resolve, reject) => {
        connection.query(
          'INSERT INTO Employee (FirstName, LastName, Email, PhoneNo) VALUES (?, ?, ?, ?)',
          [FirstName, LastName, Email, PhoneNo],
          (err, result) => {
            if (err) {
              console.error('Error:', err);
              reject('Error adding employee....');
            } else {
              resolve('Employee added successfully.');
            }
          }
        );
      });
  
      res.status(201).send('Employee added successfully.');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error adding employee..');
    }
  };
  

module.exports={
    addEmployee
}
