import styled, { css } from "styled-components";
import { colors, fontSize } from "@theme";

const ButtonStyles = styled.button`
	/* Default button styles */
	background-color: ${colors.white};
	cursor: pointer;
	padding: 10px 20px;
	font-weight: 600;
	display: block;
	min-width: 125px;
	border: none;
	transition: color 0.3s, background 0.3s;
	font-size: ${fontSize.small};

	/* Primary button styles */
	${(props) =>
		props.primary &&
		css`
			background-color: ${colors.primary}};
			color: ${colors.white};
			border: none;

			&:hover {
				background-color: ${colors.black};
			}
		`}

	/* Secondary button styles */
	${(props) =>
		props.secondary &&
		css`
			background-color: ${colors.transparent};
			color: ${colors.secondary};
			border: 2px solid ${colors.secondary};

			&:hover {
				background-color: ${colors.secondary};
				color: ${colors.white};
			}
		`}

	/* Tertiary button styles */
	${(props) =>
		props.tertiary &&
		css`
			background-color: ${colors.transparent};
			color: ${colors.terciary};
			text-decoration: underline;

			&:hover {
				background: #f5f5f5;
			}
		`}

		/* Add styles for other states, such as hover, focus, active, etc. here */
		&:hover {
		/* Add styles for hover state here */
	}
`;

export default ButtonStyles;
