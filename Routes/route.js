module.exports = (app) => {
   const employeeController = require('../Controller/Controller')

   //create a new employee
   app.post('/employee', employeeController.createNewContact);

   // Retrieve all employee
   app.get('/employee/read', employeeController.findAll);

   //Retrieve a single employee with employeeId
   app.get('/employee/empId', employeeController.findOne);

   //Update a employee with employeeId
   app.put('/employee/:id', employeeController.updateData);

   //Delete a employee with empId
   // app.delete('/employee/empId', employeeController.delete);*/
}
