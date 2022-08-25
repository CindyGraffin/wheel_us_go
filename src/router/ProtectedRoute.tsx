import { Navigate, Outlet } from "react-router-dom";
import IUser from "../types/User";

interface ProtectedRouteProps {
    user: IUser | null;
}

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({user}) => {
	if (!user) {
        return <Navigate to='/' replace />
    }
    return <Outlet/>
};

export default ProtectedRoute;
