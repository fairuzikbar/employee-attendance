const express = require('express');
const router = express.Router();

const EmployeeRoute = (employeeController) => {
    const {createEmployee, listEmployee, updateEmployee, deleteEmployeeData} = employeeController()
    router.post('/', createEmployee);
    router.get('/', listEmployee);
    router.put('/', updateEmployee);
    router.delete('/:id', deleteEmployeeData);
    return router;
}

module.exports = EmployeeRoute;