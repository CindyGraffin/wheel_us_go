import React from "react";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import "./dashboardUser.css";

export interface DashboardUsersProps {
    className?: string;
}

const DashboardUsers: React.FC<DashboardUsersProps> = ({ className = "" }) => {
    return (
        <DashboardLayout>
            <p>DashboardUsers</p>
        </DashboardLayout>
    );
};

export default DashboardUsers;
