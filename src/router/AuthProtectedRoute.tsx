import React from "react";
import { Navigate } from "react-router-dom";
import IUser from "../types/IUser";

interface AuthProtectedRouteProps {
	user: IUser | null;
    children: JSX.Element;
}

const AuthProtectedRoute: React.FC<AuthProtectedRouteProps> = ({
	user,
	children
}) => {
	if (user) {
		return <Navigate to="/profile" replace />;
	}

	return children;
};

export default AuthProtectedRoute;
