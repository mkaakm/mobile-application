import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import baseURL from "./baseURL";

const instance = axios.create({
    baseURL
})

export const setToken = async() => {
    const token = await AsyncStorage.getItem('@token');
    if(token) {
        instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    }
}

export const signUp = async (resquestData)=> {
    const {data} = await instance.post("/auth/signup", resquestData);

    return data;
}

export const signIn = async (resquestData)=> {
    const {data} = await instance.post("/auth/signin", resquestData);
    await AsyncStorage.setItem('token', data.token);
    instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    return data;
}

export const remove = async ()=> {
    setToken()
    const {data} = await instance.get("/auth/remove");
    await AsyncStorage.clear()
    instance.defaults.headers.common.authorization = ``;
    return data;
}



export default instance;