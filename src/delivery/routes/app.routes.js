const express = require('express');
const router = express.Router();
const db = require('../../config/db');

const EmployeeRepository = require('../../repository/employee.repository');
const EmployeeService = require('../../service/employee.service');
const EmployeeController = require('../controller/employee.controller');
const employeeRouter = require('../routes/employee.routes');

const EmployeeAttendanceRepository = require('../../repository/employeeattendance.repository');
const EmployeeAttendanceService = require('../../service/employeeattendance.service');
const EmployeeAttendanceController = require('../controller/employeeattendance.controller');
const employeeAttendanceRouter = require('../routes/employeeattendance.routes');

const WorkHourRepository = require('../../repository/workhour.repository');
const WorkHourService = require('../../service/workhour.service');
const WorkHourController = require('../controller/workhour.controller');
const workHourRouter = require('../routes/workhour.routes');

const employeeService = (req, res, next) => {
    req.service = EmployeeService(EmployeeRepository(db));
    next()
}

const employeeAttendanceService = (req, res, next) => {
    req.service = EmployeeAttendanceService(EmployeeAttendanceRepository(db));
    next()
}

const workHourService = (req, res, next) => {
    req.service = WorkHourService(WorkHourRepository(db));
    next()
}

router.use('/employee', employeeService, employeeRouter(EmployeeController));
router.use('/attendance', employeeAttendanceService, employeeAttendanceRouter(EmployeeAttendanceController));
router.use('/workhour', workHourService, workHourRouter(WorkHourController));

module.exports = router;