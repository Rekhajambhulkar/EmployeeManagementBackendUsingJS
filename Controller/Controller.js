const employeeService = require('../Service/Service')
const response = {};

class employeeController {
    //create and save employee data
    createNewContact = (req, res) => {
            console.log(req.body)
            employeeService.createService(req.body)
                .then(result => {
                    response.success = true;
                    response.message = "Added Successfully";
                    response.data = result.data;
                    return res.status(200).send(response);
                }).catch(err => {
                    response.success = false;
                    response.message = "Invalid!";
                    response.error = err.error;
                    return res.status(400).send(response);
                })
    }
    
    findAll = (req, res) => {
           // console.log(req.body)
            employeeService.getAllData()
                .then(result => {
                    response.success = true;
                    response.message = "Retrieve successfully!";
                    response.data = result.data;
                    return res.status(200).send(response)
                }).catch(err => {
                    response.success = false;
                    response.message = "Invalid";
                    response.error = err.error;
                    return res.status(400).send(response);
                })
    }

    delete = (req, res) =>{
        employeeService.deleteEmployeeData(req)
        .then(result =>{
            response.success = true;
            response.message = "Deleted successfully";
            response.data = result.data;
            return res.status(200).send(response);
        }).catch(err =>{
            response.success = false;
            response.message = "Invalid";
            response.error = error.err;
            return res.status(400).send(response);
        })
    }

    updateData = (req, res) => {
        console.log(req.body)
        employeeService.getEmployeeUpdate(req, req.body)
            .then(result => {
                response.sucess = true;
                response.message = "updated successfully!";
                response.data = result.data;
                return res.status(200).send(response)
            }).catch(err => {
                response.sucess = false;
                response.message = "Invalid";
                response.error = err.error;
                return res.status(400).send(response);
            })
    }
}

module.exports = new employeeController();