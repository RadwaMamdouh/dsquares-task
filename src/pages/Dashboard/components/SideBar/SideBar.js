import { Box, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

// Icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SmsFailedOutlinedIcon from "@mui/icons-material/SmsFailedOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// STYLES
import styles from "./SideBar.module.scss";

const SideBar = () => {
	const navigate = useNavigate();

	const user = JSON.parse(localStorage.getItem("user"));

	const userName = user.userName.split("@")[0];

	const handleLogout = () => {
		localStorage.removeItem("loggedin");
		navigate("/login");
	};

	return (
		<Box className={styles.sideBar_holder}>
			<Box className={styles.top}>
				<Box className={styles.logo}>
					<img src="/img/logo.png" alt="" />
				</Box>
			</Box>
			<Box className={styles.sideBar_links}>
				<NavLink to="manage-complaints" className={styles.sideBar_link}>
					<SmsFailedOutlinedIcon />
					<span>Manage Complaints</span>
				</NavLink>
				<NavLink to="manage-funded-merchants" className={styles.sideBar_link}>
					<BusinessCenterOutlinedIcon />
					<span>Manage Funded Merchants</span>
				</NavLink>
				<NavLink to="system-logs" className={styles.sideBar_link}>
					<QueryBuilderOutlinedIcon />
					<span>System Logs</span>
				</NavLink>
				<NavLink to="user-managment" className={styles.sideBar_link}>
					<PeopleAltOutlinedIcon />
					<span>User Managment</span>
				</NavLink>
				<NavLink to="system-settings" className={styles.sideBar_link}>
					<SettingsOutlinedIcon />
					<span>System Settings</span>
				</NavLink>
			</Box>
			<Box className={styles.bottom}>
				<Box className={styles.info_action}>
					<Box className={styles.info}>
						<AccountCircleOutlinedIcon />
						<Box className={styles.name}>
							<h6>User Name</h6>
							<h4>{userName}</h4>
						</Box>
					</Box>
					<Box className={styles.actions}>
						<Button variant="contained" className="btn w-100">
							<LockOutlinedIcon />
							<Box component="span">Change Password</Box>
						</Button>
						<Button
							variant="contained"
							className="btn w-100"
							color="error"
							onClick={handleLogout}
						>
							<LogoutOutlinedIcon />
							<Box component="span">Logout</Box>
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SideBar;
