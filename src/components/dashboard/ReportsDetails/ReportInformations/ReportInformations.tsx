import React from "react";
import IReport from "../../../../types/IReport";
import { formattedDate } from "../../../../utils/formatDate";
import Card from "../../../UI/dashboard/Card/Card";
import "./reportInformations.css";

export interface ReportInformationsProps {
    report: IReport;
}

const ReportInformations: React.FC<ReportInformationsProps> = ({ report }) => {
    return (
        <Card className="report_information_container">
            {report && report.createdAt && (
                <p>
                    Signalement crée le&nbsp;
                    <strong>
                        {formattedDate(new Date(report.createdAt), "-")}
                    </strong>
                </p>
            )}
            <p>
                pour la catégorie <strong>{report.category}</strong>
            </p>
            <div>
                <p>emit par l'utilisateur :</p>
                <div>
                    <p>
                        <strong>
                            {report.reportBy?.firstname}&nbsp;
                            {report.reportBy?.lastname}
                        </strong>
                        &nbsp;( id:&nbsp;
                        {report.reportBy?.userId}&nbsp;)
                    </p>
                    <p>{report.reportBy?.email}</p>
                </div>
                <div className="report_comment">
                    <span>`{report.comment}`</span>
                </div>
            </div>
        </Card>
    );
};

export default ReportInformations;
