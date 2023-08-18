import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isSignUp: false,
    isSignIn: false,
    signInTry: 0,
    goal: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSignUp: (state, {payload}) => ({...state, isSignUp: payload}),
        setLogin: (state, {payload}) => ({...state, isSignIn: payload, signInTry: 0}),
        increaseSignInTry: (state) => ({...state, signInTry: state.signInTry + 1}),
        setGoal: (state, {payload}) => ({...state, goal: payload}),
    }
})

export const {setSignUp, setLogin, increaseSignInTry, setGoal} = authSlice.actions;

export default authSlice.reducer;