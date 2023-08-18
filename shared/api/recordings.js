import axios from "axios";

import baseURL from "./baseURL";

export const addRecord = async (data)=> {
    const {data: result} = await axios.post(`${baseURL}/recordings`, data, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
    });

    return result;
}

export const addOneRecord = async (data)=> {
    const {data: result} = await axios.post(`${baseURL}/recordings/one`, data, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
    });

    return result;
}