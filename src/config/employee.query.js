const EmployeeQuery = () => {
    const INSERT_EMPLOYEE = `INSERT INTO employee(employee_id, employee_name, position_name, department_name) VALUES ($1, $2, $3, $4) RETURNING *`;
    const SELECT_EMPLOYEE = `SELECT * FROM employee`;
    const UPDATE_EMPLOYEE = `UPDATE employee SET employee_name = $1, department_id = $2, position_id = $3 WHERE employee_id = $4 RETURNING *`;
    const DELETE_EMPLOYEE = `DELETE FROM employee WHERE employee_id = $1`;

    return {
        INSERT_EMPLOYEE, SELECT_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE
    }
}

module.exports = EmployeeQuery;