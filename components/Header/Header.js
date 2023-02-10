import Link from "next/link";
import React from "react";
import { Menu, Logo, MenuLinksContainer, MenuLinks } from "./Header.styled";

const Header = () => {
	return (
		<header>
			<Menu>
				<Link href="/">
					<Logo>Project</Logo>
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
		</header>
	);
};

export default Header;
