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
						<Link href="/about">
							<a>About</a>
						</Link>
					</MenuLinks>
					<MenuLinks>
						<Link href="/pageTwo">
							<a>Page Two</a>
						</Link>
					</MenuLinks>
					<MenuLinks>
						<Link href="/pageThree">
							<a>Page Three</a>
						</Link>
					</MenuLinks>
				</MenuLinksContainer>
			</Menu>
		</footer>
	);
};

export default Footer;
