import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";
import todayTasksReducer from "./today-tasks/today-tasks-slice";
import scriptsReducer from "./scripts/scripts-slice";

const rootReducer = combineReducers({
    auth: authReducer,
    todayTasks: todayTasksReducer,
    scripts: scriptsReducer,
})

export default rootReducer;