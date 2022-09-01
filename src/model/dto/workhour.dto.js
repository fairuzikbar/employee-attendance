const WorkHour = require('../workhour');

const WorkHourDto = (result, employee, index = 0) => {
    return WorkHour (
        result.rows[index].employee_id,
        employee.rows[0]['employee_name'],
        employee.rows[0]['position_name'],
        employee.rows[0]['department_name'],
        result.rows[index].at_time,
        result.rows[index].work_hour
    )
}

module.exports = WorkHourDto;