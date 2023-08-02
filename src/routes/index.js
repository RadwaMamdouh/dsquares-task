// ESSENTIALS
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import AuthLayout from "layout/AuthLayout/AuthLayout";
import MainLayout from "layout/MainLayout/MainLayout";

// Pages
import { Dashboard, SignIn } from "pages";
import { ManageComplaints, ManageFundedMerchants } from "pages/Dashboard/pages";

// Protected Routes
import ProtectedRoutes from "services/ProtectedRoutes";

const AllRoutes = () => (
	<Routes>
		{/* Authentication Routes */}
		<Route element={<AuthLayout />}>
			<Route exact strict path="/login" element={<SignIn />}></Route>
		</Route>

		{/* Dashboard Routes */}
		<Route element={<MainLayout />}>
			{/* Protected Routes */}
			<Route path="/" element={<ProtectedRoutes />}>
				<Route exact strict path="/" element={<Dashboard />}>
					<Route
						path="/"
						exact
						strict
						element={<Navigate replace to="/manage-complaints" />}
					/>
					<Route
						exact
						strict
						index
						path="manage-complaints"
						element={<ManageComplaints />}
					/>
					<Route
						exact
						strict
						index
						path="manage-funded-merchants"
						element={<ManageFundedMerchants />}
					/>
				</Route>
			</Route>
		</Route>
	</Routes>
);

export default AllRoutes;
