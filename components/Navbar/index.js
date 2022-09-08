import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Flex } from "../../styles/global.syles";
import { NavbarContainer } from "./Navbar.styles";
import logo from "../../images/logo.png";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isFixed, setIsFixed] = useState(false);
	const [shouldShow, setShouldShow] = useState(false);
	const [shownav, setShownav] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			console.log(document.documentElement.scrollTop);
			if (
				(document.body.scrollTop > 100 && document.body.scrollTop <= 300) ||
				(document.documentElement.scrollTop > 100 &&
					document.documentElement.scrollTop <= 300)
			) {
				setIsFixed(true);
				setShouldShow(false);
			} else if (
				document.body.scrollTop > 300 ||
				document.documentElement.scrollTop > 300
			) {
				setShouldShow(true);
			} else {
				setIsFixed(false);
				setShouldShow(false);
			}
		});
	}, []);

	return (
		<NavbarContainer
			isFixed={isFixed}
			shouldShow={shouldShow}
			shownav={shownav}>
			<div className='container'>
				<Flex justify='space-between'>
					{/* logo  */}
					<div className='logo'>
						<Link href='/'>
							<Image src={logo} alt='' />
						</Link>
					</div>
					{/* links  */}
					<div className='links'>
						<Flex gap='40px'>
							<Link href='/'>
								<a className='active'>Home</a>
							</Link>
							<Link href='/'>
								<a className=''>Features</a>
							</Link>
							<Link href='/'>
								<a className=''>Contact us</a>
							</Link>
							<Link href='/'>
								<button>Login</button>
							</Link>
						</Flex>
						{/* bars  */}
						<div
							className='bars'
							onClick={() => setShownav((prevState) => !prevState)}>
							{shownav ? <FaTimes /> : <FaBars />}
						</div>
					</div>
				</Flex>
			</div>
		</NavbarContainer>
	);
};

export default Navbar;
