import React from "react";
import DashboardLayout from "../../layout/dashboard/dashboard/DashboardLayout";
import "./loadingScreen.css";

const LoadingScreen: React.FC<unknown> = () => {
    return (
        <DashboardLayout>
            <div className="loading__container">
                <div>
                    <div className="no_profile_img" />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default LoadingScreen;
