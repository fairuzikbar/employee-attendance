const EmployeeAttendanceQuery = () => {
    const INSERT_ATTENDANCE = `INSERT INTO employee_attendance(employee_id, at_date, at_time, punch_type) VALUES ($1, $2, $3, $4) RETURNING *`;
    const SELECT_ATTENDANCE = `SELECT * FROM employee_attendance`;
    const SELECT_EMPLOYEE = `SELECT * FROM employee WHERE employee_id = $1`;
    const FILTER_ATTENDANCE = `SELECT * FROM employee_attendance WHERE employee_id = $1 AND at_date = $2 AND punch_type = $3`

    return {
        INSERT_ATTENDANCE, SELECT_ATTENDANCE, SELECT_EMPLOYEE, FILTER_ATTENDANCE
    }
}

module.exports = EmployeeAttendanceQuery;