const WorkHourService = (workHourRepository) => {
    const { create, list } = workHourRepository;

    const createWorkHour = async (newHour) => {
        try {
            return await create(newHour);
        } catch (error) {
            console.log(error.message);
        }
    }

    const listWorkHour = async (newHour) => {
        try {
            return await list(newHour);
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        createWorkHour, listWorkHour
    }
}

module.exports = WorkHourService;