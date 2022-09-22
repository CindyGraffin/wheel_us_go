import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import "./dashboardRepportsList.css";

const DashboardRepportsList: React.FC<unknown> = () => {
    return (
        <DashboardLayout>
            <div>
                <div className="dashboard_reports_title">
                    <p>Signalements</p>
                    <FiAlertCircle className="dashboard_reports_icon" />
                </div>
                <div>inserer table ici</div>
            </div>
        </DashboardLayout>
    );
};

export default DashboardRepportsList;
