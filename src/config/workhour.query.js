const WorkHourQuery = () => {
    const INSERT_WORK_HOUR = `INSERT INTO employee_work_hour(employee_id, at_date, work_hour) VALUES ($1, $2, $3) RETURNING *`;
    const FILTER_ATTENDANCE = `SELECT * FROM employee_attendance WHERE employee_id = $1 AND at_date = $2 AND punch_type = $3`

    return {
        INSERT_WORK_HOUR, FILTER_ATTENDANCE
    }
}

module.exports = WorkHourQuery;