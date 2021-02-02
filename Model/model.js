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
    createData = (req) => {
            return new Promise((resolve, reject) => {
                let employeeData = new employees(req)
                employeeData.save().then(result => {
                    resolve(result)
                    console.log("get data Successfully", result);
                }).catch(err => {
                    reject(err)
                })
            })
    }

    retrieveData = () => {
            return new Promise((resolve, reject) => {
                employees.find().then(result => {
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

    updateData = (req, id) => {
            return new Promise((resolve, reject) => {
                employees.findByIdAndUpdate(id, req, {new: true})
                .then(result => {
                    resolve(result)
                    console.log("get data Successfully", result);
                }).catch(err => {
                    reject(err)
                })
            })
    }
}

module.exports = new Employee();