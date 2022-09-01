const Employee = require('../employee');

const EmployeeDto = (result, index = 0) => {
    return Employee (
        result.rows[index].employee_id,
        result.rows[index].employee_name,
        result.rows[index].position_name,
        result.rows[index].department_name
    )
}

module.exports = EmployeeDto;