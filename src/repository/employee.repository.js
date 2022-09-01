const EmployeeQuery = require('../config/employee.query');
const EmployeeDto = require('../model/dto/employee.dto');

const EmployeeRepository = (db) => {
    const create = async (payload) => {
        try {
            const result = await db.query(EmployeeQuery().INSERT_EMPLOYEE,
                [
                    payload.employee_id,
                    payload.employee_name,
                    payload.position_name,
                    payload.department_name
                ]);
                return EmployeeDto(result);
        } catch (error) {
            console.log(error.message);
        }
    }

    const list = async () => {
        try {
            const result = await db.query(EmployeeQuery().SELECT_EMPLOYEE);
            const employees = [];
            for(let i = 0; i < result.rows.length; i++){
                employees.push(EmployeeDto(result, i))
            }
            return employees;
        } catch (error) {
            console.log(error.message);
        }
    }

    const update = async (payload) => {
        try {
            const result = await db.query(EmployeeQuery().UPDATE_EMPLOYEE,
                [
                    payload.employee_name,
                    payload.position_name,
                    payload.department_name,
                    payload.employee_id
                ]);
                return EmployeeDto(result);
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleted = async (id) => {
        try {
            await db.query(EmployeeQuery().DELETE_EMPLOYEE,[id])
            return { message : `Delete ID ${id} berhasil` }
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        create, list, update, deleted
    }
}

module.exports = EmployeeRepository;