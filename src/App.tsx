import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    ConnectionPage,
    Dashboard,
    DashboardStats,
    DashboardUsers,
    PremiumPage,
    ProfilePage,
    ReglagesPage,
    SearchUser,
    UserFriends,
    UserMessages,
    UserTables,
} from "./pages";
import ProtectedRoute from "./router/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";
import AuthProtectedRoute from "./router/AuthProtectedRoute";
import AdminRoute from "./router/AdminRoute";

function App() {
    const { state } = useContext(AuthContext);

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
                    <Route path="/searchuser" element={<SearchUser />} />
                    <Route path="/usertables" element={<UserTables />} />
                    <Route path="/usermessages" element={<UserMessages own={true}/>} />
                    <Route path="/userfriends" element={<UserFriends />} />
                    <Route path="/premium" element={<PremiumPage />} />
                    <Route path="/reglages" element={<ReglagesPage />} />
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
