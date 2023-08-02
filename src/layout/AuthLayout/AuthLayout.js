import { Outlet } from "react-router-dom";

// STYLES
import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
	return (
		<main className={styles.auth_layout}>
			<Outlet />
		</main>
	);
};

export default AuthLayout;
