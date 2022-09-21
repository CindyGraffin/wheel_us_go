import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import DashboardUserTable from "../../components/dashboard/dashboardUser/DashboardUserTable";
import LoadingScreen from "../../components/dashboard/LoadingScreen/LoadingScreen";
import useFetch from "../../hooks/useFetch";
import "./dashboardUser.css";

const DashboardUsers: React.FC<unknown> = () => {
    const { data: users, loading, reFetch } = useFetch("/users");

    if (!users && loading) return <LoadingScreen />;

    return (
        <DashboardLayout>
            <div>
                <div className="dashboard_user_title">
                    <p>Utilisateurs</p>
                    <HiOutlineUsers className="dashboard_user_icon" />
                </div>
                <div>
                    <DashboardUserTable users={users} refetchData={reFetch} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DashboardUsers;
