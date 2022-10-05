import React from "react";
import "./Input.css";

function Input({ label, inputType, value, onChange }) {
	return (
		<div className="input_container">
			<label>{label}</label>
			<input type={inputType} value={value} onChange={onChange} />
		</div>
	);
}

export default Input;
