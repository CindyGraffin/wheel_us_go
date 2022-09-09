import React from "react";

import IUser from "../../../../types/IUser";
import "./dashboardUserTable.css";

export interface DashboardUserTableProps {
    users: IUser[];
}

const DashboardUserTable: React.FC<DashboardUserTableProps> = ({ users }) => {
    return (
        <div>
            {users
                .sort((a, b) => {
                    if (a.lastname < b.lastname) {
                        return -1;
                    }
                    if (a.lastname > b.lastname) {
                        return 1;
                    }
                    return 0;
                })
                .map((user, key) => (
                    <p>
                        {user.firstname}&nbsp;{user.lastname}
                    </p>
                ))}
        </div>
    );
};

export default DashboardUserTable;
