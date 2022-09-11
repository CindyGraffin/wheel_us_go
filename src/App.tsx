import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
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
	UserRooms,
    ViewRoom
} from "./pages";

import ProtectedRoute from "./router/ProtectedRoute";
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
                    <Route path="/userrooms" element={<UserRooms />} />
                    <Route path="/usermessages" element={<UserMessages />} />
                    <Route path="/userfriends" element={<UserFriends />} />
                    <Route path="/premium" element={<PremiumPage />} />
                    <Route path="/reglages" element={<ReglagesPage />} />
                    <Route path="/viewroom/:roomid" element={<ViewRoom/>}/>
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
