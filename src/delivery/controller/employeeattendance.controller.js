const Response = require('../../utils/response');

const EmployeeAttendanceController = () => {    
    const createAttendanceIn = async (req, res) => {
        try {
            const payload = req.body;
            const newAttendance = await req.service.employeeIn(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newAttendance));
        } catch (error) {
            res.json(Response().errorMessage('400', 'Failed to check in!'));
        }
    }

    const createAttendanceOut = async (req, res) => {
        try {
            const payload = req.body;
            const newAttendance = await req.service.employeeOut(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newAttendance));
        } catch (error) {
            res.json(Response().errorMessage('400', 'Failed to check out!'));
        }
    }

    const listAttendance = async (req, res) => {
        try {
            const employees = await req.service.findAllAttendance();
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employees));
        } catch (error) {
            res.json(Response().errorMessage('400', 'List Attendance failed!'));
        }
    }

    return {
        createAttendanceIn, createAttendanceOut, listAttendance
    }
}

module.exports = EmployeeAttendanceController;