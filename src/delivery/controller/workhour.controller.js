const Response = require('../../utils/response');

const EmployeeAttendanceController = () => {
    const createHourEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const newWorkHour = await req.service.createWorkHour(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newWorkHour));
        } catch (error) {
            console.log(error.message);
        }
    }

    const listHourEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const newWorkHour = await req.service.listWorkHour(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newWorkHour));
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        createHourEmployee, listHourEmployee
    }
}

module.exports = EmployeeAttendanceController;