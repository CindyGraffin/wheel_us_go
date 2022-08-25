import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	ConnectionPage,
	PremiumPage,
	ProfilePage,
	ReglagesPage,
	SearchUser,
	UserFriends,
	UserMessages,
	UserTables,
} from "./pages";
import ProtectedRoute from "./router/ProtectedRoute";
import { useAppSelector } from "./hooks/hooks";


function App() {
	const authState = useAppSelector((state) => state.auth)

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ConnectionPage />} />
				<Route element={<ProtectedRoute user={authState.user} />}>
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/searchuser" element={<SearchUser />} />
					<Route path="/usertables" element={<UserTables />} />
					<Route path="/usermessages" element={<UserMessages />} />
					<Route path="/userfriends" element={<UserFriends />} />
					<Route path="/premium" element={<PremiumPage />} />
					<Route path="/reglages" element={<ReglagesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
