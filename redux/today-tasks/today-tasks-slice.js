import {createSlice} from "@reduxjs/toolkit";

import allDays from "./all-days"

const initialState = {
    day: "",
    allDays: [...allDays],
    items: [],
    uncompleteTasksCount: 0,
}

const todayTasksSlice = createSlice({
    name: "todayTasks",
    initialState,
    reducers: {
        setTodayTasks: (state) => {
            const now = new Date();
            const day = now.getDay();
            if (day !== 6 && day !== 0) {
                const items = state.allDays[day].map(item => ({...item, done: false}));
                return {...state, day, items}
            }
            return {...state, day, items: []}
        },
        addCompleteTask: (state, {payload}) => {
            const task = state.items.find(item => item.name === payload.name && item.start === payload.start && item.end === payload.end);
            task.done = true;
        },
        toogleCompleteTask: (state, {payload}) => {
            const task = state.items.find(item => item.name === payload.name && item.start === payload.start && item.end === payload.end);
            task.done = !task.done;
        },
        addAlmostCompleteTask: (state, {payload}) => {
            const task = state.items.find(item => item.name === payload.name && item.type === payload.type && item.start === payload.start && item.end === payload.end);
            task.almostDone = true;
        },
        replaceTask: (state, {payload}) => {
            const task = state.allDays[state.day - 1].find(item => {
                const result = item.events.find(elem => elem.name === payload.name);
                return Boolean(result)
            });

            const exacltyEvent = task.events.find(item => item.name === payload.name);

            exacltyEvent.name = payload.replaceTask.name;
            exacltyEvent.type = payload.replaceTask.type;
        },
        addResheduleTask: (state, {payload}) => {
            if (state.day + 1 > 5) {
                return state;
            }
            const nextDay = state.allDays[state.day + 1];
            const flexTime = nextDay.find(item => item.name === "FLEX TIME");
            flexTime.name = payload.name;
            flexTime.type = payload.type;
            state.uncompleteTasksCount++;
            const task = state.items.find(item => item.name === payload.name && item.type === payload.type && item.start === payload.start && item.end === payload.end);
            task.almostDone = true;
        }
    }
})

export const {
    setTodayTasks,
    addCompleteTask,
    toogleCompleteTask,
    addAlmostCompleteTask,
    addResheduleTask,
    replaceTask
} = todayTasksSlice.actions;

export default todayTasksSlice.reducer;