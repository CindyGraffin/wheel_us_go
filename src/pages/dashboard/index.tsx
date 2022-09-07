import React from "react";

export interface DashboardProps {
    className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className = "" }) => {
    return (
        <div className={className}>
            <p>indexDashboard</p>
        </div>
    );
};

export default Dashboard;
