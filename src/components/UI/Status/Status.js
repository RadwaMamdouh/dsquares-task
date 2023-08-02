import { Box } from "@mui/material";

// STYLES
import styles from "./Status.module.scss";

const Status = ({ statusTxt }) => {
	const getStatus = (status) => {
		let statusTxt = status.replace(/ +/g, "").toLowerCase();
		return statusTxt;
	};

	return <Box className={getStatus(statusTxt)}>{statusTxt}</Box>;
};

export default Status;
