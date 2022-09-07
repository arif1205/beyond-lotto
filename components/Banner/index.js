import React from "react";
import Image from "next/image";
import { Container } from "./Banner.styles";
import bannerbg from "../../images/banner-bg.png";

const Banner = () => {
	return (
		<Container bannerbg={bannerbg}>
			{/* <Image src={bannerbg} alt='' /> */}
		</Container>
	);
};

export default Banner;
