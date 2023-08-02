import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

// Components
import { Passw0rdWithShowIcon, TextInput } from "components/Form/Inputs";

// STYLES
import styles from "./SignIn.module.scss";

const SignIn = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			userName: "",
			email: "",
			password: "",
		},
		validate: (data) => {
			let errors = {};

			if (!data.userName) {
				errors.userName = "user name is required";
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.userName)
			) {
				errors.userName = "user name is invalid, E.g example@email.com";
			}

			if (!data.password) {
				errors.password = "password is required";
			} else if (!/^.{8,}$/i.test(data.password)) {
				errors.password = "password length shoud be at least 8 chars";
			}

			return errors;
		},
		onSubmit: (data) => {
			localStorage.setItem("user", JSON.stringify(data));

			const loggedUser = JSON.parse(localStorage.getItem("user"));

			if (
				loggedUser.userName === data.userName &&
				loggedUser.password === data.password
			) {
				localStorage.setItem("loggedin", true);
				navigate("/");
				formik.resetForm();
			} else if (loggedUser.userName === data.userName) {
				formik.setErrors({
					userName: "Incorrect user name",
				});
			} else if (loggedUser.password === data.password) {
				formik.setErrors({
					password: "Incorrect password",
				});
			}
		},
	});

	const isFormFieldValid = (name) =>
		!!(formik.touched[name] && formik.errors[name]);

	const getFormErrorMessage = (name) => {
		return (
			isFormFieldValid(name) && (
				<small className="p-error">{formik.errors[name]}</small>
			)
		);
	};

	return (
		<Box className={styles.auth_p}>
			<Box className={styles.top}>
				<Link to="/" className={styles.app_logo}>
					<img src="/img/logo.png" alt="" />
				</Link>
			</Box>

			<Box className={styles.form_holder}>
				<Box className={styles.form_title}>
					<h1>Login</h1>
				</Box>
				<form onSubmit={formik.handleSubmit}>
					<Box className={styles.inputs_wrapper}>
						{/* Email */}
						<TextInput
							inputName="userName"
							inputLabel="User Name"
							type="text"
							placeHolder="Enter user name"
							inputVal={formik.values.userName}
							changeHandler={formik.handleChange}
							inputError={getFormErrorMessage("userName")}
						/>

						{/* Password */}
						<Passw0rdWithShowIcon
							inputName="password"
							inputLabel="Password"
							placeHolder="Enter Password"
							inputVal={formik.values.password}
							changeHandler={formik.handleChange}
							inputError={getFormErrorMessage("password")}
						/>
					</Box>
					<Button type="submit" variant="contained" className="btn w-100">
						Login
					</Button>
				</form>
			</Box>
		</Box>
	);
};

export default SignIn;
