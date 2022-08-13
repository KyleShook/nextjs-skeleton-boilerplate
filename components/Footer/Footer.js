import Link from "next/link";
import React from "react";
import { Menu, Logo, MenuLinksContainer, MenuLinks } from "./Footer.styled";

const Footer = () => {
	return (
		<footer>
			<Menu>
				<Link passHref href="/">
					<Logo>Footer Title</Logo>
				</Link>
				<MenuLinksContainer>
					<MenuLinks>
						<Link href="/pageOne">
							<a>About</a>
						</Link>
					</MenuLinks>
					<MenuLinks>
						<Link href="/pageTwo">
							<a>Link 2</a>
						</Link>
					</MenuLinks>
					<MenuLinks>
						<Link href="/pageThree">
							<a>Link 3</a>
						</Link>
					</MenuLinks>
				</MenuLinksContainer>
			</Menu>
		</footer>
	);
};

export default Footer;
