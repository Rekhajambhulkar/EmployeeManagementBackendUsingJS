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
            console.log(req)
            return new Promise((resolve, reject) => {
                employees.create(req).then(result => {
                    resolve(result)
                }).catch(err => {
                    reject(err)
                })
            })
        } catch (error) {
            next(error);
        }
    }

    retrieveOneData = (req) =>{
        return new Promise((resolve, reject) =>{
            employees.findOne(req).then(result =>{
                resolve(result)
            }).catch(err =>{
                reject(err)
            })
        })
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

    updateData = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                employees.findOneAndUpdate(req).then(result => {
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