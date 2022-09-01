const Response = require('../../utils/response');

const EmployeeController = () => {    
    const createEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const newEmployee = await req.service.registerEmployee(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
        } catch (error) {
            res.json(Response().errorMessage('400', 'Create Employee failed!'));
        }
    }

    const listEmployee = async (req, res) => {
        try {
            const employees = await req.service.findAllEmployee();
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employees));
        } catch (error) {
            res.json(Response().errorMessage('400', 'List Employee failed!'));
        }
    }

    const updateEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const upEmployee = await req.service.editEmployee(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', upEmployee))
        } catch (error) {
            res.json(Response().errorMessage('400', 'Update Employee failed!'));
        }
    }

    const deleteEmployeeData = async (req,res) => {
        try {
            const employee_id = req.params.id;
            const employee = await req.service.deleteEmployee(+employee_id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
        } catch (error) {
            res.json(Response().errorMessage('400', 'Delete Employee failed!'));
        }
    }

    return {
        createEmployee, listEmployee, updateEmployee, deleteEmployeeData
    }
}

module.exports = EmployeeController;