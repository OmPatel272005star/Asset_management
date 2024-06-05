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
        const { id } = req.params; // Extract employee ID from URL parameters
        await new Promise((resolve, reject) => {
            connection.query(
                'DELETE FROM Employee WHERE EmployeeId = ?',
                [id], // Use id instead of employeeId
                (err, result) => {
                    if (err) {
                        console.error('Error:', err);
                        reject('Error deleting employee.');
                    } else {
                        resolve(`Employee deleted successfully. ID: ${id}`); // Include the employee ID in the response message
                    }
                }
            );
        });

        res.status(200).send(`Employee deleted successfully. ID: ${id}`); // Include the employee ID in the response message
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error deleting employee.');
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params; // Extract employee ID from URL parameters
        const { FirstName, LastName, Email, PhoneNo } = req.body; // Extract update data from request body

        // Construct the SQL update query
        const sqlQuery = `UPDATE Employee 
                          SET FirstName = ?, LastName = ?, Email = ?, PhoneNo = ?
                          WHERE EmployeeId = ?`;

        // Execute the SQL update query
        await new Promise((resolve, reject) => {
            connection.query(
                sqlQuery,
                [FirstName, LastName, Email, PhoneNo, id], // Provide update data and employee ID as parameters
                (err, result) => {
                    if (err) {
                        console.error('Error:', err);
                        reject('Error updating employee.');
                    } else {
                        resolve(`Employee updated successfully. ID: ${id}`);
                    }
                }
            );
        });

        res.status(200).send(`Employee updated successfully. ID: ${id}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error updating employee.');
    }
};


module.exports={
    addEmployee,deleteEmployee,updateEmployee
}
