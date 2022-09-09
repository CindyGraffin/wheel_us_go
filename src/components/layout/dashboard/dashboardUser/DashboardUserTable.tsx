import React from "react";

import IUser from "../../../../types/IUser";
import "./dashboardUserTable.css";

export interface DashboardUserTableProps {
    users: IUser[];
}

const DashboardUserTable: React.FC<DashboardUserTableProps> = ({ users }) => {
    return (
        <div>
            <div className="grid_header">
                <div className="grid_header_name grid_name">Nom</div>
                <div className="grid_header_email grid_email">Email</div>
                <div className="grid_header_role grid_role">Rôle</div>
                <div className="grid_header_actions grid_actions">Actions</div>
            </div>
            <div className="grid_content">
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
                        <div key={key} className="grid_items">
                            <div className="grid_img">img</div>
                            <div className="grid_name">
                                {user.firstname}&nbsp;{user.lastname}
                            </div>
                            <div className="grid_email">{user.email}</div>
                            <div className="grid_role">{user.role}</div>
                            <div className="grid_actions">TODO: ACTIONS</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DashboardUserTable;
