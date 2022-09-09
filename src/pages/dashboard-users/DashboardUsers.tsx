import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineUsers } from "react-icons/hi";
import DashboardLayout from "../../components/layout/dashboard/dashboard/DashboardLayout";
import DashboardUserTable from "../../components/layout/dashboard/dashboardUser/DashboardUserTable";
import LoadingScreen from "../../components/UI/dashboard/LoadingScreen/LoadingScreen";
import IUser from "../../types/IUser";
import "./dashboardUser.css";

export interface DashboardUsersProps {
    className?: string;
}

const DashboardUsers: React.FC<DashboardUsersProps> = ({ className = "" }) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(false);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            setLoading(true);
            try {
                const res = await axios.get("http://localhost:8800/api/users");
                setUsers(res.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (!users && loading) return <LoadingScreen />;

    return (
        <DashboardLayout>
            <div>
                <div>
                    <p>Utilisateurs</p>
                    <HiOutlineUsers />
                </div>
                <div>
                    <DashboardUserTable users={users} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DashboardUsers;
