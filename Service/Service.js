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

  getAllData = (req) => {
      return employeeModel.retrieveData(req).then(result => {
        return ({ message: "Employee Data fetched successfully !", data: result });
      }).catch(err => {
        return ({ message: "Failed to retrieving data !", error: err });
      })
  }

  deleteEmployeeData = (req) =>{
    return employeeModel.deleteData(req.params.id).then(result =>{
      if(!result){
        return({message: "data not found !" + req.params.id})
      }
      return ({ message: "Employee data deleted Successfully!", data: result});
    }).catch(err =>{
      return ({message: "Failed to delete data!", error: err});
    })
  }

  getEmployeeUpdate = (req) => {
    return employeeModel.updateData(req.params.id, req.body).then(result => {
      if(!result){
        return ({message: "not found!" + req.params.id})
      }
      return ({ message: "Employee Data Updated successfully !", data: result });
    }).catch(err => {
      
      return ({ message: "Failed to update data !", error: err });
    })
  }
}

module.exports = new employeeService();