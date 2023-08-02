import { Box } from "@mui/material";

// STYLES
import styles from "./ComplaintTimeFrame.module.scss";

const ComplaintTimeFrame = ({ timeFrame }) => {
	const getTimeFrame = (status) => {
		let timeF = status.replace(/ +/g, "").toLowerCase();
		return timeF;
	};

	return (
		<Box className={`${styles.time_frame} ${getTimeFrame(timeFrame)}`}>
			<Box component="span"></Box>
			<Box component="span"></Box>
			<Box component="span"></Box>
		</Box>
	);
};

export default ComplaintTimeFrame;
