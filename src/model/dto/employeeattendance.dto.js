const EmployeeAttendance = require('../employeeattendance');

const EmployeeAttendanceDto = (result, employee, index = 0) => {
    return EmployeeAttendance (
        result.rows[index].employee_id,
        employee.rows[0]['employee_name'],
        employee.rows[0]['position_name'],
        employee.rows[0]['department_name'],
        result.rows[index].at_date,
        result.rows[index].at_time,
        result.rows[index].punch_type
    )
}

module.exports = EmployeeAttendanceDto;