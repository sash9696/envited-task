import React, { useState } from "react";
import "./LandingPage.css";
import landingPageImage from "../../assets/images/landing-page.svg";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE_TEXTS } from "../../constants";

function LandingPage() {
	const navigate = useNavigate();

	const goToCreateEventPage = () => {
		navigate("/create");
	};

	return (
		<div className="landing_page_container">
			<div className="landing_page_right_section_description_top">
				<p className="landing_page_right_title_one">
					{LANDING_PAGE_TEXTS.MAIN_TEXT_LINE1}
				</p>
				<p className="landing_page_right_title_two">
					{LANDING_PAGE_TEXTS.MAIN_TEXT_LINE2}
				</p>
				<p className="landing_page_right_title_three">
					{LANDING_PAGE_TEXTS.MAIN_TEXT_LINE3}
				</p>
				<p className="landing_page_right_description">
					{LANDING_PAGE_TEXTS.SUB_TEXT}
				</p>
			</div>
			<div className="landing_page_left_section">
				<img src={landingPageImage} alt="landing-page" />
			</div>
			<div className="landing_page_right_section">
				<div className="landing_page_right_section_description_bottom">
					<p className="landing_page_right_title_one">
						{LANDING_PAGE_TEXTS.MAIN_TEXT_LINE1}
					</p>
					<p className="landing_page_right_title_two">
						{LANDING_PAGE_TEXTS.MAIN_TEXT_LINE2}
					</p>
					<p className="landing_page_right_title_three">
						{LANDING_PAGE_TEXTS.MAIN_TEXT_LINE3}
					</p>
					<p className="landing_page_right_description">
						{LANDING_PAGE_TEXTS.SUB_TEXT}
					</p>
				</div>
				<div className="landing_page_right_button_container">
					<button
						onClick={goToCreateEventPage}
						className="landing_page_right_button">
						🎉 {LANDING_PAGE_TEXTS.BUTTON_TEXT}
					</button>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
