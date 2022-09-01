const express = require('express');
const router = express.Router();

const EmployeeAttendanceRoute = (employeeAttendanceController) => {
    const {createAttendanceIn, createAttendanceOut, listAttendance} = employeeAttendanceController()
    router.post('/in', createAttendanceIn);
    router.post('/out', createAttendanceOut);
    router.get('/', listAttendance);

    return router;
}

module.exports = EmployeeAttendanceRoute;