import React, { createContext, useEffect } from "react";
import IUser from '../types/IUser';

type InitialStateType = {
    user: IUser;
    loading: boolean;
    error: boolean;
}

const initialState = {
    user: JSON.parse(localStorage.getItem('user') || ""),
    loading: false,
    error: false
}

export const AuthContext = createContext<InitialStateType>(initialState);


