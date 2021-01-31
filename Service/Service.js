const { response } = require('express');
const employeeModel = require('../Model/model')

class employeeService {

  createService = (req, next) => {
     try {
       let employeeDetails = {
         "firstname": req.firstname,
         "lastname": req.lastname,
         "emailId": req.emailId,
         "phoneNumber": req.phoneNumber,
         "salary": req.salary,
         "department": req.department
       }
       return employeeModel.createData(employeeDetails).then(result => {
         return ({ message: "Employee Data added successfully !", data: result });
       }).catch(err => {
         return ({ message: "Failed to add data !", error: err });
       })
     } catch (error) {
       next(error)
     }
   }

  employeeDetailsGetService = (req) => {
      return employeeModel.retrieveData(req).then(result => {
        return ({ message: "Employee Data fetched successfully !", data: result });
      }).catch(err => {
        return ({ message: "Failed to retrieving data !", error: err });
      })
  }

  employeeRetrieveOneContact = (req) =>{
    return employeeModel.retrieveOneData(req).then(result =>{
      return ({ message: "fetch one Data!", data: result});
    }).catch(err =>{
      return ({ message: "Failed to retrieving data !", error: err});
    })
  }

  getEmployeeUpdate = (req) => {
    return employeeModel.updateData(req).then(result => {
      return ({ message: "Employee Data Updated successfully !", data: result });
    }).catch(err => {
      
      return ({ message: "Failed to update data !", error: err });
    })
  }
}

module.exports = new employeeService();