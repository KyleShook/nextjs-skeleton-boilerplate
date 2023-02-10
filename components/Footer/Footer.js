import Link from "next/link";
import React from "react";
import { Menu, Logo, MenuLinksContainer, MenuLinks } from "./Footer.styled";

const Footer = () => {
	return (
		<footer>
			<Menu>
				<Link href="/">
					<Logo>Footer Title</Logo>
				</Link>
				<MenuLinksContainer>
					<MenuLinks>
						<Link href="/about">About</Link>
					</MenuLinks>
					<MenuLinks>
						<Link href="/pageTwo">Page Two</Link>
					</MenuLinks>
					<MenuLinks>
						<Link href="/pageThree">Page Three</Link>
					</MenuLinks>
				</MenuLinksContainer>
			</Menu>
		</footer>
	);
};

export default Footer;
