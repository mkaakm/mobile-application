import axios from "axios";

import baseURL from "./baseURL";

export const getAll = async ()=> {
    const {data} = await axios(`${baseURL}/welcome-slides`);

    return data;
}

export const getStep = async (step)=> {
    const {data} = await axios(`${baseURL}/welcome-slides/${step}`);

    return data;
}

