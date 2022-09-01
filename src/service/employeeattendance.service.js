const EmployeeAttendanceService = (employeeAttendanceRepository) => {
    const { createIn, createOut, list } = employeeAttendanceRepository;

    const employeeIn = async (newEmployee) => {
        try {
            return await createIn(newEmployee);
        } catch (error) {
            console.log(error.message);
        }
    }

    const employeeOut = async (newEmployee) => {
        try {
            return await createOut(newEmployee);
        } catch (error) {
            console.log(error.message);
        }
    }

    const findAllAttendance = async () => {
        try {
            return await list();
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        employeeIn, employeeOut, findAllAttendance
    }
}

module.exports = EmployeeAttendanceService;