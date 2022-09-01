const express = require('express');
const router = express.Router();

const WorkHourRoute = (workHourController) => {
    const { createHourEmployee, listHourEmployee } = workHourController()
    router.post('/', createHourEmployee);
    router.get('/', listHourEmployee);

    return router;
}

module.exports = WorkHourRoute;