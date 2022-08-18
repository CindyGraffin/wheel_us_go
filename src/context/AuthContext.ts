import { createContext, useEffect } from "react";
import IAction from "../types/IAction";
import IUser from "../types/IUser";

type InitialStateType = {
	user: IUser;
	loading: boolean;
	error: boolean;
};

const initialState = {
	user: JSON.parse(localStorage.getItem("user") || ""),
	loading: false,
	error: false,
};

export const AuthContext = createContext<{state: InitialStateType}>({state: initialState});

const AuthReducer = (state: InitialStateType, action: IAction) => {
	switch (action.type) {
		case "LOGIN_START":
			return {
				user: null,
				loading: true,
				error: false,
			};
		case "LOGIN_SUCCESS":
			return {
				user: action.payload,
				loading: false,
				error: false,
			};
		case "LOGIN_FAILURE":
			return {
				user: null,
				loading: false,
				error: true,
			};
		case "LOGOUT":
			return {
				user: null,
				loading: false,
				error: false,
			};
		default:
			return state;
	}
};
