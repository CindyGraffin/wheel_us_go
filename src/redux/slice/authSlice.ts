import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from '../../types/User'

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: boolean
}

const initialState = {
    user: JSON.parse(localStorage.getItem("user") as string),
	loading: false,
	error: false
} as AuthState

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state = {
                user: null,
                loading: true,
                error: false
            }
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state = {
                user: action.payload,
                loading: false,
                error: false
            }
        },
        loginFailure: (state) => {
            state = {
                user: null,
                loading: false,
                error: true
            }
        },
        logout: (state) => {
            state = {
                user: null,
                loading: false,
                error: false
            }
        }
    }
})

export const {loginStart, loginSuccess, loginFailure, logout} = authSlice.actions;

export const authReducer = authSlice.reducer