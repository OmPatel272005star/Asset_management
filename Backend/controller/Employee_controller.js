const connection = require('../connection');

const addEmployee = async (req, res) => {
    try {
      const { FirstName, LastName, Email, PhoneNo } = req.body;
      
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
  

  const deleteEmployee = async (req, res) => {
    try {
      const { employeeId } = req.params; 
      await new Promise((resolve, reject) => {
        connection.query(
          'DELETE FROM Employee WHERE EmployeeId = ?',
          [employeeId],
          (err, result) => {
            if (err) {
              console.error('Error:', err);
              reject('Error deleting employee.');
            } else {
              resolve('Employee deleted successfully.');
            }
          }
        );
      });
  
      res.status(200).send('Employee deleted successfully.');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error deleting employee.');
    }
  };

module.exports={
    addEmployee,deleteEmployee
}