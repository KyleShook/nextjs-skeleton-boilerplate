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
		</header>
	);
};

export default Header;
