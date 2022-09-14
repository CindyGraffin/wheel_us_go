import React from "react";
import { BiStats } from "react-icons/bi";
import RegistredUserCount from "../../components/dashboard/dashboardStat/RegistredUserCount";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import useFetch from "../../hooks/useFetch";
import "./dashboardStats.css";

const DashboardStats: React.FC<unknown> = () => {
    const { data, loading } = useFetch("/stats/users/registred");

    return (
        <DashboardLayout>
            <div>
                <div className="dashboard_stat_title">
                    <p>Statistiques</p>
                    <BiStats className="dashboard_stat_icon" />
                </div>
                {data && !loading && (
                    <RegistredUserCount count={data.registerUserCount} />
                )}
            </div>
        </DashboardLayout>
    );
};

export default DashboardStats;
