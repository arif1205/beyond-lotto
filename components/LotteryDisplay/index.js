import React from "react";
import Image from "next/image";
import {
	SectionContainer,
	SectionContent,
	SectionHeader,
	SectionSubTitle,
	SectionTitle,
} from "../../styles/global.syles";
import { LotterDisplayContent } from "./LotteryDisplay.styles";
import tv from "../../images/tv.png";

const LotteryDisplay = () => {
	return (
		<SectionContainer bg='white'>
			<SectionContent>
				{/* --------------- */}
				{/* Section header  */}
				{/* --------------- */}
				<SectionHeader>
					{/* Title  */}
					<SectionTitle>Huge Lottery Display</SectionTitle>
					{/* Subtitle  */}
					<SectionSubTitle>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam.
					</SectionSubTitle>
				</SectionHeader>
				{/* --------------- */}
				{/* Section body  */}
				{/* --------------- */}
				<LotterDisplayContent>
					<div className='img'>
						<Image src={tv} alt='Shopping' />
					</div>
				</LotterDisplayContent>
			</SectionContent>
		</SectionContainer>
	);
};

export default LotteryDisplay;
