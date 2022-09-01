const EmployeeService = (employeeRepository) => {
    const { create, list, update, deleted } = employeeRepository;

    const registerEmployee = async (newEmployee) => {
        try {
            return await create(newEmployee);
        } catch (error) {
            console.log(error.message);
        }
    }

    const findAllEmployee = async () => {
        try {
            return await list();
        } catch (error) {
            console.log(error.message);
        }
    }

    const editEmployee = async (upEmployee) => {
        try {
            return await update(upEmployee);
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteEmployee = async (employee_id) => {
        try {
            return await deleted(employee_id);
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        registerEmployee, findAllEmployee, editEmployee, deleteEmployee
    }
}

module.exports = EmployeeService;