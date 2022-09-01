const EmployeeAttendanceQuery = require("../config/employeeattendance.query");
const EmployeeAttendanceDto = require("../model/dto/employeeattendance.dto");

const EmployeeAttendanceRepository = (db) => {
  const createIn = async (payload) => {
    try {
      const filter = await db.query(
        EmployeeAttendanceQuery().FILTER_ATTENDANCE,[
          payload.employee_id,
          new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })),
          "IN",
        ]
      );
      if(filter.rowCount > 0){
        return `Anda sudah melakukan presensi hari ini`
      }

      const result = await db.query(
        EmployeeAttendanceQuery().INSERT_ATTENDANCE,
        [
          payload.employee_id,
          new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })),
          new Date(new Date().getTime()).toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta" }),
          "IN",
        ]
      )
      const employee = await db.query(EmployeeAttendanceQuery().SELECT_EMPLOYEE,[result.rows[0]["employee_id"]])
      return EmployeeAttendanceDto(result, employee);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createOut = async (payload) => {
    try {
      const filterOut = await db.query(
        EmployeeAttendanceQuery().FILTER_ATTENDANCE,[
          payload.employee_id,
          new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })),
          "OUT",
        ]
      );
      if(filterOut.rowCount > 0){
        return `Anda sudah pulang`
      }

      const filterIn = await db.query(
        EmployeeAttendanceQuery().FILTER_ATTENDANCE,[
          payload.employee_id,
          new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })),
          "IN",
        ]
      );

      if(filterIn.rowCount == 0){
        return `Anda belum melakukan presensi`
      }

      const result = await db.query(
        EmployeeAttendanceQuery().INSERT_ATTENDANCE,
        [
          payload.employee_id,
          new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })),
          new Date(new Date().getTime()).toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta" }),
          "OUT",
        ]
      );
      const employee = await db.query(EmployeeAttendanceQuery().SELECT_EMPLOYEE,[result.rows[0]["employee_id"]])
      return EmployeeAttendanceDto(result, employee);
    } catch (error) {
      console.log(error.message);
    }
  };

  const list = async () => {
    try {
      const result = await db.query(EmployeeAttendanceQuery().SELECT_ATTENDANCE);
      const attendances = [];
      for (let i = 0; i < result.rows.length; i++) {
        const employee = await db.query(EmployeeAttendanceQuery().SELECT_EMPLOYEE,[result.rows[i]["employee_id"]])
        attendances.push(EmployeeAttendanceDto(result, employee, i));
      }
      return attendances;
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    createIn,
    createOut,
    list
  };
};

module.exports = EmployeeAttendanceRepository;
