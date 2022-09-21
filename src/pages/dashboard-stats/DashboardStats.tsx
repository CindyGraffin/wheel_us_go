import React from "react";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import "./dashboardStats.css";

export interface DashboardStatsProps {
    className?: string;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ className = "" }) => {
    return (
        <DashboardLayout>
            <p>DashboardStats</p>
        </DashboardLayout>
    );
};

export default DashboardStats;
