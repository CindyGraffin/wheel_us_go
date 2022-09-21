import React from "react";
import "./dashboardReport.css";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { IoAlertOutline } from "react-icons/io5";
import { formattedDate } from "../../utils/formatDate";
import Card from "../../components/UI/dashboard/Card/Card";

const DashboardReport: React.FC<unknown> = () => {
    const { userid, reportid } = useParams();

    const { data: report } = useFetch(`/report/${reportid}`);
    const { data: user } = useFetch(`/users/${userid}`);

    console.log(user);

    return (
        <DashboardLayout>
            <div>
                <div>
                    <p>Détails de signalement</p>
                    <IoAlertOutline />
                </div>
                <div>
                    {user && (
                        <Card>
                            <div>
                                <div>
                                    <img
                                        src={user.userImg}
                                        alt="visualisaton du profile de l'utilisateur"
                                    />
                                </div>
                                <div>
                                    <span>
                                        {user.firstname}&nbsp;
                                        {user.lastname}
                                    </span>
                                    <span>{user.email}</span>
                                    <span>{user.role}</span>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
                {report && (
                    <Card>
                        <p>
                            Signalement crée le&nbsp;
                            {formattedDate(new Date(report.createdAt), "-")}
                        </p>
                        <p>pour la catégorie {report.category}</p>
                        <div>
                            <p>emit par l'utilisateur :</p>
                            <div>
                                <p>
                                    {report.reportBy?.firstname}&nbsp;
                                    {report.reportBy?.lastname}&nbsp;( id:&nbsp;
                                    {report.reportBy?.userId}&nbsp;)
                                </p>
                                <p>{report.reportBy?.email}</p>
                            </div>
                            <div>{report.comment}</div>
                        </div>
                    </Card>
                )}
            </div>
        </DashboardLayout>
    );
};

export default DashboardReport;
