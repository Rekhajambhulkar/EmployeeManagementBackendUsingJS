const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    }
})

const employees = mongoose.model('employees', employeeSchema)

class Employee {
    createData = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                let employeeData = new employees(req)
                employeeData.save().then(result => {
                    resolve(result)
                    console.log("get data Successfully", result);
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (error) {
            next(error);
        }
    }

    retrieveData = (req) => {
            return new Promise((resolve, reject) => {
                employees.find(req).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
    }

    deleteData = (req) =>{
        return new Promise((resolve, reject) =>{
            employees.findByIdAndDelete(req).then(result =>{
                resolve(result)
            }).catch(err =>{
                reject(err)
            })
        })
    }

    updateData = (req, reqUpdate, next ) => {
     try {
            return new Promise((resolve, reject) => {
                employees.findByIdAndUpdate(req, {
                    firstname: reqUpdate.firstname,
                    lastname: reqUpdate.lastname,
                    emailId: reqUpdate.emailId,
                    phoneNumber: reqUpdate.phoneNumber,
                    salary: reqUpdate.salary,
                    department: reqUpdate.department
                }, {new: true})
                .then(result => {
                    resolve(result)
                    console.log("get data Successfully", result);
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new Employee();