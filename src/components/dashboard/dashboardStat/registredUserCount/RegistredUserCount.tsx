import React from "react";
import Card from "../../../UI/dashboard/Card/Card";
import "./registredUserCount.css";

export interface RegistredUserCountProps {
    count: number;
}

const RegistredUserCount: React.FC<RegistredUserCountProps> = ({ count }) => {
    return (
        <Card className="register_count_container">
            <div className="register_count">Utilisateur incrit : {count}</div>
        </Card>
    );
};

export default RegistredUserCount;
