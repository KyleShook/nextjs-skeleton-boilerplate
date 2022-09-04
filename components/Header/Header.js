import Link from "next/link";
import React from "react";
import { Menu, Logo, MenuLinksContainer, MenuLinks } from "./Header.styled";

const Header = () => {
	return (
		<header>
			<Menu>
				<Link passHref href="/">
					<Logo>Project</Logo>
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
		</header>
	);
};

export default Header;
