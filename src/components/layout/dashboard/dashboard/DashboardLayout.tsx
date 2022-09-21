import React from "react";
import DashboardMenu from "../dashboardMenu/DashboardMenu";

import "./dashboardLayout.css";

export interface DashboardLayoutProps {
    children: JSX.Element;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="layout__dashboard">
            <div>
                <DashboardMenu />
            </div>
            <div className="content__container">{children}</div>
        </div>
    );
};

export default DashboardLayout;
