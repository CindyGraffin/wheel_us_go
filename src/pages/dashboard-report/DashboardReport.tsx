import React from "react";
import "./dashboardReport.css";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { IoAlertOutline } from "react-icons/io5";
import UserProfile from "../../components/dashboard/ReportsDetails/UserProfile/UserProfile";
import ReportInformations from "../../components/dashboard/ReportsDetails/ReportInformations/ReportInformations";
import { Button } from "../../components/UI";
import { userService } from "../../services/userService";

const DashboardReport: React.FC<unknown> = () => {
    const { userid, reportid } = useParams();

    const { data: report } = useFetch(`/report/${reportid}`);
    const { data: user, reFetch } = useFetch(`/users/${userid}`);

    const onClickBanUser = async (userId: string): Promise<void> => {
        await userService.banUserById(userId);

        reFetch();
    };

    return (
        <DashboardLayout>
            <div>
                <div className="dashboard_detail_report_header">
                    <div className="dahboard_report_detail_title">
                        <p>Détails de signalement</p>
                        <IoAlertOutline className="dashboard_report_detail_icon" />
                    </div>
                    <div>
                        {user.isActive ? (
                            <Button
                                color="red"
                                onClick={() => onClickBanUser(user._id)}
                            >
                                <p>Bannir</p>
                            </Button>
                        ) : (
                            <Button
                                color="purple"
                                onClick={() => onClickBanUser(user._id)}
                            >
                                <p>Débannir</p>
                            </Button>
                        )}
                    </div>
                </div>
                {user && <UserProfile user={user} />}
                {report && <ReportInformations report={report} />}
            </div>
        </DashboardLayout>
    );
};

export default DashboardReport;
