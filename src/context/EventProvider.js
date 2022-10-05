import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

function EventProvider({ children }) {
	const [eventDetails, setEventDetails] = useState({
		eventName: "",
		hostName: "",
		startDate: "",
		endDate: "",
		startTime: "",
		endTime: "",
        eventImage: "",
        streetAddress: "",
        mainAddress: ""
	});
	return (
		<EventContext.Provider value={{ eventDetails, setEventDetails }}>
			{children}
		</EventContext.Provider>
	);
}
export const useEventValue = () => useContext(EventContext)
export default EventProvider;
