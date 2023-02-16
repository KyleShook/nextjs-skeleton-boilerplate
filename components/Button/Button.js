import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./Button.styled";

const Button = (props) => {
	const { children, onClick, type } = props;

	return (
		<ButtonStyles onClick={onClick} type={type}>
			{children}
		</ButtonStyles>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.string.isRequired,
};

Button.defaultProps = {
	onClick: () => {},
	type: "fill",
};

export default Button;
