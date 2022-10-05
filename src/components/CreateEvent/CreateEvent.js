import React, { useState, useEffect } from "react";
import "./CreateEvent.css";
import Input from "../../common/Input/Input";
import { useEventValue } from "../../context/EventProvider";
import { useNavigate } from "react-router-dom";
import { CREATE_EVENT_PAGE_TEXTS } from "../../constants";

function CreateEvent() {
	const { setEventDetails } = useEventValue();
	const navigate = useNavigate();

	const [eventName, setEventName] = useState("");
	const [hostName, setHostName] = useState("");
	const [startDate, setStartDate] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endDate, setEndDate] = useState("");
	const [endTime, setEndTime] = useState("");
	const [selectedFile, setSelectedFile] = useState();
	const [preview, setPreview] = useState();
	const [streetAddress, setStreetAddress] = useState("");
	const [mainAddress, setMainAddress] = useState("");

	const isDisabled = () => {
		return (
			!eventName ||
			!hostName ||
			!startDate ||
			!startTime ||
			!endDate ||
			!endTime
		);
	};

	const onSubmit = () => {
		setEventDetails({
			eventName: eventName,
			hostName: hostName,
			startDate: startDate,
			endDate: endDate,
			startTime: startTime,
			endTime: endTime,
			eventImage: selectedFile,
			streetAddress: streetAddress,
			mainAddress: mainAddress,
		});
		navigate("/event");
	};

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}

		setSelectedFile(e.target.files[0]);
	};

	return (
		<div className="create_event_container">
			<div className="create_event_content_container">
				<h1 className="create_event_content_container_title">
					{CREATE_EVENT_PAGE_TEXTS.TITLE}
				</h1>
				<Input
					label="Event Name"
					inputType="text"
					value={eventName}
					onChange={(e) => setEventName(e.target.value)}
				/>
				<Input
					label="Host Name"
					inputType="text"
					value={hostName}
					onChange={(e) => setHostName(e.target.value)}
				/>

				<div className="create_event_time">
					<Input
						label="Start Date"
						inputType="date"
						value={startDate}
						onChange={(e) => setStartDate(e.target.value)}
					/>
					<Input
						label="Start Time"
						inputType="time"
						value={startTime}
						onChange={(e) => setStartTime(e.target.value)}
					/>
				</div>
				<div className="create_event_time">
					<Input
						label="End Date"
						inputType="date"
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
					/>
					<Input
						label="End Time"
						inputType="time"
						value={endTime}
						onChange={(e) => setEndTime(e.target.value)}
					/>
				</div>
				<Input
					label="Street Address"
					inputType="text"
					value={streetAddress}
					onChange={(e) => setStreetAddress(e.target.value)}
				/>
				<Input
					label="Main Address"
					inputType="text"
					value={mainAddress}
					onChange={(e) => setMainAddress(e.target.value)}
				/>
				<div className="input_container">
					<label>{CREATE_EVENT_PAGE_TEXTS.UPLOAD_IMAGE}</label>
					<input type="file" onChange={onSelectFile} />
				</div>
				<button
					className={
						isDisabled()
							? "create_event_content_container_button_disabled"
							: "create_event_content_container_button"
					}
					disabled={isDisabled()}
					onClick={onSubmit}>
					{CREATE_EVENT_PAGE_TEXTS.BUTTON_TEXT}
				</button>
			</div>
		</div>
	);
}

export default CreateEvent;
