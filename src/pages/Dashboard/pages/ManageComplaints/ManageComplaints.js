import { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

import { DataGridPro } from "@mui/x-data-grid-pro";

// Moment
import moment from "moment/moment";

// Icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Components
import PagesHead from "components/UI/PagesHead/PagesHead";
import Status from "components/UI/Status/Status";

// STYLES
import styles from "./ManageComplaints.module.scss";

const ManageComplaints = () => {
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// columns
	const columns = [
		{
			field: "complaintNumber",
			headerName: "Complaint Number",
			width: 180,
		},
		{
			field: "complaintDepartment",
			headerName: "Complaint Department",
			width: 180,
		},
		{
			field: "complaintStatus",
			headerName: "Complaint Status",
			width: 180,
			renderCell: (complaintStatus) => (
				<Status statusTxt={complaintStatus.value} />
			),
		},
		{
			field: "complaintDate",
			headerName: "Complaint Date",
			type: "dateTime",
			operatorValue: "contains",
			valueFormatter: (params) =>
				moment(params?.value).format("DD/MM/YYYY hh:mm A"),
			width: 260,
		},
		{
			field: "complaintTimeFrame",
			headerName: "Complaint Time Frame",
			width: 180,
		},
		{
			field: "taxPayerName",
			headerName: "Tax Payer Name",
			width: 180,
		},
		{
			field: "city",
			headerName: "City",
			width: 180,
		},
		{
			field: "area",
			headerName: "Area",
			width: 180,
		},
		{
			field: "taxPayerBranchName",
			headerName: "Tax Payer Branch Name",
			width: 180,
		},
		{
			field: "rin",
			headerName: "RIN",
			width: 180,
		},
		{
			field: "allDetails",
			headerName: "All Details",
			type: "actions",
			width: 180,
			getActions: () => [
				<Button
					type="button"
					variant="contained"
					endIcon={<KeyboardArrowRightIcon />}
					className={`w-100 ${styles.all_details}`}
				>
					All Details
				</Button>,
			],
		},
	];

	// Rows
	const rows = [
		{
			id: 1,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Pending",
			complaintDate: new Date(2023, 1, 13, 17, 15),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Nasr City",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 2,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Transformed",
			complaintDate: new Date(2023, 5, 23, 17, 15),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Tagamoa",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 3,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Transformed",
			complaintDate: new Date(2023, 7, 10, 17, 15),
			complaintTimeFrame: "Closed",
			taxPayerName: "Starbucks",
			city: "Giza",
			area: "Zamalek",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 4,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Closed",
			complaintDate: new Date(2023, 2, 24, 17, 15),
			complaintTimeFrame: "Closed",
			taxPayerName: "Starbucks",
			city: "Giza",
			area: "Dokki",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 5,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Pending",
			complaintDate: new Date(2023, 6, 21, 2, 55),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Maadi",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 6,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Closed With Coupon",
			complaintDate: new Date(2023, 1, 13, 4, 15),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Maadi",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 7,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Transformed",
			complaintDate: new Date(2023, 1, 13, 17, 15),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Maadi",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 8,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Closed With Coupon",
			complaintDate: new Date(2023, 3, 20, 16, 20),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Maadi",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 9,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Pending",
			complaintDate: new Date(2023, 5, 22, 11, 30),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Maadi",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 10,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Transformed",
			complaintDate: new Date(2023, 1, 13, 17, 15),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Maadi",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
		{
			id: 11,
			complaintNumber: "129861294",
			complaintDepartment: "Anti-Evasion",
			complaintStatus: "Pending",
			complaintDate: new Date(2023, 1, 13, 17, 15),
			complaintTimeFrame: "Normal",
			taxPayerName: "Starbucks",
			city: "Cairo",
			area: "Maadi",
			taxPayerBranchName: "Abbas",
			rin: "876-121-987",
		},
	];

	return (
		<Box>
			{/* header */}
			<PagesHead title="Manage Complaints" />

			{/* Tabs */}
			<TabContext value={value}>
				<Box className="tabs_holder">
					<Tabs
						value={value}
						onChange={handleChange}
						visibleScrollbar={true}
						aria-label="scrollable force tabs example"
						dir="ltr"
					>
						<Tab label="All" value={"1"} />

						<Tab label="Default" value={"2"} />
					</Tabs>
				</Box>
				<TabPanel value="1">
					<div style={{ height: 480, width: "100%" }}>
						<DataGridPro
							rows={rows}
							columns={columns}
							initialState={{
								pagination: {
									paginationModel: { page: 0, pageSize: 10 },
								},
							}}
							pageSizeOptions={[10, 20, 30, 50]}
							pinnedColumns={{
								left: ["complaintNumber"],
								right: ["allDetails"],
							}}
							pagination={true}
							unstable_headerFilters
							// disableColumnMenu={true}
						/>
					</div>
				</TabPanel>
				<TabPanel value="2">Default</TabPanel>
			</TabContext>
		</Box>
	);
};

export default ManageComplaints;
