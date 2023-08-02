import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

// ICONS
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

// STYLES
import styles from "./Passw0rdWithShowIcon.module.scss";

export function Passw0rdWithShowIcon({ ...props }) {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Box className="input_holder">
			<label
				className={`${styles.field_holder} ${
					props.inputError ? "input_error" : ""
				}`}
			>
				{props.inputLabel.length > 0 && <h6>{props.inputLabel}</h6>}
				<Box className={styles.input_box}>
					<TextField
						type={showPassword ? "text" : "password"}
						name={props.inputName}
						value={props.inputVal}
						placeholder={props.placeHolder}
						onChange={props.changeHandler}
						className="w-100"
					/>
					<Button
						variant="text"
						className={styles.show_icon}
						onClick={handleClickShowPassword}
					>
						{showPassword ? (
							<VisibilityOutlinedIcon />
						) : (
							<VisibilityOffOutlinedIcon />
						)}
					</Button>
				</Box>
			</label>
			{props.inputError}
		</Box>
	);
}
