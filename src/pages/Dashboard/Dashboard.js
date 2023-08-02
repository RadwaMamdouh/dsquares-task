import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// Components
import SideBar from "./components/SideBar/SideBar";

// STYLES
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	return (
		<Box className={styles.dashboard}>
			<SideBar />
			<Box className={styles.pages_content}>
				<Outlet />
			</Box>
		</Box>
	);
};

export default Dashboard;
