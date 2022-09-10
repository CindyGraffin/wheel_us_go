import React from "react";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import "./dashboard.css";

export interface DashboardProps {
    className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className = "" }) => {
    return (
        <DashboardLayout>
            <p>indexDashboard</p>
        </DashboardLayout>
    );
};

export default Dashboard;
