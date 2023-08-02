import { Box } from "@mui/material";

// STYLES
import styles from "./PagesHead.module.scss";

const PagesHead = ({ title }) => {
	return (
		<Box className={styles.pages_head}>
			<h1>{title}</h1>
			{/* <Box>Lng</Box>   */}
		</Box>
	);
};

export default PagesHead;
