import { useContext, useEffect } from "react";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    ConnectionPage,
	CreateNewRoom,
    Dashboard,
    DashboardStats,
    DashboardUsers,
    PremiumPage,
    ProfilePage,
    ReglagesPage,
    SearchUser,
    UserFriends,
    UserGroups,
    UserMessages,
    UserProfile,
    UserRooms,
    ViewRoom,
} from "./pages";

import ProtectedRoute from "./router/ProtectedRoute";
import AuthProtectedRoute from "./router/AuthProtectedRoute";
import AdminRoute from "./router/AdminRoute";
import { io } from "socket.io-client";
import DashboardReport from "./pages/dashboard-report/DashboardReport";


const socket = io("https://wheelsocket.azurewebsites.net/");

function App() {
    const { state } = useContext(AuthContext);

    useEffect(() => {
        const userId = state.user?._id;
        if (userId) {
            socket.emit("addUser", userId);
            socket.on("getUsers", (users) => {
                console.log(users);
            });
        }

        return () => {
            socket.off("addUser");
            socket.off("getUsers");
        };
    }, [state.user?._id]);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthProtectedRoute user={state.user}>
                            <ConnectionPage />
                        </AuthProtectedRoute>
                    }
                />
                <Route element={<ProtectedRoute user={state.user} />}>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/:userId" element={<UserProfile />} />
                    <Route path="/searchuser" element={<SearchUser />} />
                    <Route path="/userrooms" element={<UserRooms />} />
                    <Route
                        path="/usermessages"
                        element={<UserMessages socket={socket} />}
                    />
                    <Route path="/userfriends" element={<UserFriends />} />
                    <Route path="/usergroups" element={<UserGroups />} />
                    <Route path="/premium" element={<PremiumPage />} />
                    <Route path="/reglages" element={<ReglagesPage />} />
                    <Route path="/viewroom/:roomid" element={<ViewRoom/>}/>
					<Route path="/createroom" element={<CreateNewRoom/>}/>
                </Route>

                <Route element={<AdminRoute user={state.user} />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route
                        path="/dashboard/users"
                        element={<DashboardUsers />}
                    />
                    <Route
                        path="/dashboard/stats"
                        element={<DashboardStats />}
                    />
                    <Route
                        path="/dashboard/reports/:userid/:reportid"
                        element={<DashboardReport />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
