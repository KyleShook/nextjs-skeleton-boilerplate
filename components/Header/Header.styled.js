import styled from "styled-components";
import { theme, type } from "styles/theme.styled";

export const Menu = styled.nav`
	padding: 12px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.p`
	color: ${theme.color};
	font-family: ${type.sans};
	font-size: 28px;
	font-weight: 600;
	text-decoration: none;
`;

export const MenuLinksContainer = styled.ul`
	display: flex;
`;

export const MenuLinks = styled.li`
	margin: 0 16px;
	font-family: ${type.sans};

	:last-child {
		margin-right: 0;
	}

	a {
		color: ${theme.color};
		font-weight: 600;
		text-decoration-color: transparent;
		text-underline-offset: 4px;
		text-decoration-thickness: 2px;
		transition: 0.3s;
	}

	a:hover {
		text-decoration-color: black;
	}
`;
