import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import { authReducer } from "./reducers/authReducer";
import IUser from "../types/IUser";
import IActionAuth from "../types/IActionAuth";

// on utilise React useContext pour le state management, ce qui permet d'accéder à la data à travers les différents composants sans passer par le props drilling

type InitialStateType = {
	user: IUser | null;
	loading: boolean;
	error: boolean;
};

const initialState = {
    // on récupére les données concernant l'utilisateur dans le localStorage si elles existent 
	// @ts-ignore
	user: JSON.parse(localStorage.getItem("user") || null),
	loading: false,
	error: false
};

// on crée le contexte en lui passant les données qui lui serviront de state initial

export const AuthContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<IActionAuth>
}>({
	state: initialState,
	dispatch: () => null
});


type AuthProviderProps = {
	children: ReactNode
}

// le hook useReducer est utilisé pour les manipulations complexes du state et sa mise à jour, il prend en paramètre le state initial ainsi que le reducer créé auparavant

const AuthContextProvider: React.FC<AuthProviderProps> = ({children}: AuthProviderProps) => {
    // dispatch permettra de déclencher une action
	const [state, dispatch] = useReducer(authReducer, initialState);

    // des que le state concernant l'utilisateur est modifié on met à jour les données de l'utilisateur avec les nouvelles data dans le localStorage
	useEffect(() => {
		        // on stock les données concernant l'utilisateur dans le localStorage afin qu'elles soient persistantes dans le navigateur de celui-ci
				localStorage.setItem('user', JSON.stringify(state.user))
			}, [state.user])

	// un Provider permet aux composants descendants qui vont l'utiliser de s'abonner aux mises à jour du contexte
	// children sera le composant qui souhaite accéder à la data stockée dans le state
	return (
		<AuthContext.Provider value={{state, dispatch}}>
			{children}
		</AuthContext.Provider>
	)
}

export {AuthContextProvider};




