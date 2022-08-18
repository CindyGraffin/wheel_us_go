import IAction from "../types/IAction";
import IAuthState from "../types/IAuthState";

// un reducer est une fonction qui prend en compte le state et une action et retourne un state mis à jour en fonction de l'action
export const authReducer = (state: IAuthState, action: IAction) => {
    // une action est un événement qui va changer le state
	switch (action.type) {
        // lorsqu'on déclenche l'action LOGIN_START le state se met à jour et correspondra à ce qui est contenu dans le return statement
		case "LOGIN_START":
			return {
				user: null,
				loading: true,
				error: false,
			};
        // si le login réussi, l'utilisateur sera passé dans le state
		case "LOGIN_SUCCESS":
			return {
				user: action.payload,
				loading: false,
				error: false,
			};
        // si le login échouen l'utilisateur sera null dans le state et on passera error sur true
		case "LOGIN_FAILURE":
			return {
				user: null,
				loading: false,
				error: true,
			};
        // en cas de déconnexion, l'utilisateur présent au prélable dans le state sera supprimé
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