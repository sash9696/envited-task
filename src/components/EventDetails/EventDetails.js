import React, { useEffect, useState } from "react";
import "./EventDetails.css";
import birthdayCakeImage from "../../assets/images/birthday-cake.png";
import CalendarLogo from "../../assets/icons/Calendar.png";
import LocationLogo from "../../assets/icons/Location.png";
import { useEventValue } from "../../context/EventProvider";

function EventDetails() {
	const { eventDetails } = useEventValue();

	const [image, setImage] = useState("");

	useEffect(() => {
		if (eventDetails.eventImage) {
			const objectUrl = URL.createObjectURL(eventDetails.eventImage);
			setImage(objectUrl);

			return () => URL.revokeObjectURL(objectUrl);
		}
	}, []);

	return (
		<div className="event_details_container">
			<div className="event_details_left_section">
				<p className="event_details_left_title">
					{" "}
					{eventDetails.eventName}{" "}
				</p>
				<p className="event_details_left_subtitle">
					{" "}
					Hosted by <span>{eventDetails.hostName}</span>
				</p>

				<div className="event_details_timings_container">
					<div className="event_details_logo">
						<img src={CalendarLogo} alt="" />
					</div>
					<div className="event_details_timings">
						<p className="event_details_timings_title">
							{eventDetails.startDate} {eventDetails.startTime}
						</p>
						<p className="event_details_timings_subtitle">
							to{" "}
							<span>
								{eventDetails.endDate} {eventDetails.endTime}
							</span>{" "}
							UTC +10
						</p>
					</div>
				</div>

				<div className="event_details_location_container">
					<div className="event_details_logo">
						<img src={LocationLogo} alt="" />
					</div>
					<div className="event_details_location">
						<p className="event_details_timings_title">
							{eventDetails.streetAddress}
						</p>
						<p className="event_details_timings_subtitle">
							{eventDetails.mainAddress}
						</p>
					</div>
				</div>
			</div>
			<div className="event_details_right_section">
				<img src={image || birthdayCakeImage} alt="Birthday-Cake" />
			</div>
		</div>
	);
}

export default EventDetails;
