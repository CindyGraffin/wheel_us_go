import React, { useContext } from "react";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import AdminProfile from "../../components/dashboard/AdminProfile/AdminProfile";
import LoadingScreen from "../../components/dashboard/LoadingScreen/LoadingScreen";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import "./dashboard.css";
import { NavLink } from "react-router-dom";
import RegistredUserCount from "../../components/dashboard/dashboardStat/registredUserCount/RegistredUserCount";

const Dashboard: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);

    const { data, loading } = useFetch("/stats/users/registred");

    if (!state.user || state.loading) return <LoadingScreen />;

    return (
        <DashboardLayout>
            <div className="spacing__container">
                <AdminProfile user={state.user} />
                <div>
                    {data && !loading && (
                        <NavLink
                            to="/dashboard/stats"
                            className="navlink__encart"
                        >
                            <RegistredUserCount
                                count={data.registerUserCount}
                            />
                        </NavLink>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
