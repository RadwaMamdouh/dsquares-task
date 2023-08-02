import { Box, TextField } from "@mui/material";

// STYLES
import styles from "./TextInput.module.scss";

export function TextInput({ ...props }) {
	return (
		<Box className="input_holder">
			<label
				className={`${styles.field_holder} ${
					props.inputError ? "input_error" : ""
				}`}
			>
				{props.inputLabel.length > 0 && <h6>{props.inputLabel}</h6>}
				<TextField
					type={props.type}
					name={props.inputName}
					value={props.inputVal}
					placeholder={props.placeHolder}
					onChange={props.changeHandler}
					className="w-100"
				/>
			</label>
			{props.inputError}
		</Box>
	);
}
