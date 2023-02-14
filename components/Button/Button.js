import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./Button.styled";

const Button = (props) => {
	const { children, onClick, primary, secondary, tertiary } = props;

	return (
		<ButtonStyles
			primary={primary}
			secondary={secondary}
			tertiary={tertiary}
			onClick={onClick}
		>
			{children}
		</ButtonStyles>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	tertiary: PropTypes.bool,
};

Button.defaultProps = {
	onClick: () => {},
	primary: false,
	secondary: false,
	tertiary: false,
};

export default Button;
