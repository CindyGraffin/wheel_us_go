import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import IUser from "../types/IUser";

export interface AdminRouteProps {
    user: IUser | null;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ user }) => {
    if (user && user.role !== "admin") {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
};

export default AdminRoute;
