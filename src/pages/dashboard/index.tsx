import React, { useContext } from "react";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import AdminProfile from "../../components/UI/dashboard/AdminProfile/AdminProfile";
import LoadingScreen from "../../components/UI/dashboard/LoadingScreen/LoadingScreen";
import { AuthContext } from "../../context/AuthContext";
import "./dashboard.css";

const Dashboard: React.FC<unknown> = () => {
    const { state } = useContext(AuthContext);

    if (!state.user || state.loading) return <LoadingScreen />;

    return (
        <DashboardLayout>
            <div>
                <AdminProfile user={state.user} />
                <div>
                    <div>users encart</div>
                    <div>stats encart</div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
