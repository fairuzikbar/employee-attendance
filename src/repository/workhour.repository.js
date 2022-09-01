const EmployeeAttendanceQuery = require('../config/employeeattendance.query');
const WorkHourQuery = require('../config/workhour.query');
const WorkHourDto = require('../model/dto/workhour.dto');

const WorkHourRepository = (db) => {
    const create = async (payload) => {
        try {
            const filterIn = await db.query(
                EmployeeAttendanceQuery().FILTER_ATTENDANCE,[
                    payload.employee_id,
                    payload.at_date,
                    "IN",
                ]
            );

            const filterOut = await db.query(
                EmployeeAttendanceQuery().FILTER_ATTENDANCE,[
                    payload.employee_id,
                    payload.at_date,
                    "OUT",
                ]
            );

            const inTime = filterIn.rows[0].at_time;
            const inSplit = inTime.split(':');
            const outTime = filterOut.rows[0].at_time;
            const outSplit = outTime.split(':');
            
            const hourIn = Number(inSplit[0])*3600;
            const minuteIn = Number(inSplit[1])*60;
            const secondIn = Number(inSplit[2]);
            const totalIn = hourIn + minuteIn + secondIn;

            const hourOut = Number(outSplit[0])*3600;
            const minuteOut = Number(outSplit[1])*60;
            const secondOut = Number(outSplit[2]);
            const totalOut = hourOut + minuteOut + secondOut;

            let totalWorkTime = totalOut - totalIn;
            const workHour = Math.floor(totalWorkTime / 3600);
            totalWorkTime -= workHour*3600;
            const workMinute = Math.floor(totalWorkTime / 60); 
            totalWorkTime -= workMinute*60;
            const workSecond = Math.floor(totalWorkTime);

            const result = await db.query(WorkHourQuery().INSERT_WORK_HOUR,
            [
                payload.employee_id,
                payload.at_date,
                `${workHour} jam, ${workMinute} menit, ${workSecond} detik`
            ])

            const employee = await db.query(EmployeeAttendanceQuery().SELECT_EMPLOYEE,[result.rows[0]["employee_id"]])
            return WorkHourDto(result, employee);
        } catch (error) {
            console.log(error.message);
        }
    }

    const list = async (payload) => {
        try {
            const filterIn = await db.query(
                WorkHourQuery().FILTER_ATTENDANCE,[
                    payload.employee_id,
                    payload.at_date,
                    "IN",
                ]
            );

            const filterOut = await db.query(
                WorkHourQuery().FILTER_ATTENDANCE,[
                    payload.employee_id,
                    payload.at_date,
                    "OUT",
                ]
            );

            return [filterIn.rows, filterOut.rows]
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        create, list
    }
}

module.exports = WorkHourRepository;