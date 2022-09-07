import React from "react";
import "./dashboardMenu.css";

export interface DashboardMenuProps {
    className?: string;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ className = "" }) => {
    return (
        <div>
            <p>dashboardMenu</p>
        </div>
    );
};

export default DashboardMenu;
