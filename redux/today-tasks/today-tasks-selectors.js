export const getTodayTasks = ({todayTasks}) => todayTasks;
export const getUncompleteTasksCount = ({todayTasks}) => todayTasks.uncompleteTasksCount;

export const getRemindTasks = ({todayTasks}) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const result = todayTasks.items.filter(item => {
        const [endHour, endMinutes] = item.start.split(":");
        const normalizedEndHour = Number(endHour);
        const normalizedEndMinutes = Number(endMinutes);
        if(hour > normalizedEndHour) {
            return true;
        }
        if(hour === normalizedEndHour && minutes > normalizedEndMinutes) {
            return true;
        }
        return false;
    })

    return result;
}

export const getUncompleteTasks = ({todayTasks}) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const uncompleteTasks = todayTasks.items.filter(item => {
        if(item.done || item.almostDone || item.name === "FLEX TIME") {
            return false;
        }

        const [endHour, endMinutes] = item.end.split(":");
        const normalizedEndHour = Number(endHour);
        const normalizedEndMinutes = Number(endMinutes);
        if(hour > normalizedEndHour) {
            return true;
        }

        if(hour === normalizedEndHour && minutes > normalizedEndMinutes) {
            return true;
        }
        return false;
    })

    return uncompleteTasks;
}