import { Outlet } from "react-router-dom";

// STYLES
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default MainLayout;
