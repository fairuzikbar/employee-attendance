const EmployeeAttendance = (
    employee_id,
    employee_name,
    position_name,
    department_name,
    at_date,
    at_time,
    punch_type
) => {
    return {
        employee_id,
        employee_name,
        position_name,
        department_name,
        at_date,
        at_time,
        punch_type};
}

module.exports = EmployeeAttendance;