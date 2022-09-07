import React from "react";
import {
	Flex,
	Grid,
	SectionContainer,
	SectionContent,
	SectionHeader,
	SectionPreTitle,
} from "../../styles/global.syles";
import { ContactInfoTitle } from "../ContactInfo/ContactInfo.styles";
import Input from "../Input";
import { ContactInfoFormContent } from "./ContactInfoForm.styles";

const ContactInfoForm = () => {
	return (
		<SectionContainer bg='white'>
			<SectionContent>
				{/* --------------- */}
				{/* Section header  */}
				{/* --------------- */}
				<SectionHeader>
					{/* pre title  */}
					<SectionPreTitle>contact us</SectionPreTitle>
					{/* Title  */}
					<ContactInfoTitle>Send Us a Message</ContactInfoTitle>
				</SectionHeader>
				{/* --------------- */}
				{/* Section body  */}
				{/* --------------- */}
				<ContactInfoFormContent>
					<form id='contact_form'>
						<Flex direction='column' gap='30px'>
							<Grid columns='repeat(2, 1fr)' gap='30px' className='input-row'>
								<Input type='text' name='name' id='name' placeholder='Name' />
								<Input
									type='email'
									name='email'
									id='email'
									placeholder='Email'
								/>
							</Grid>
							<Grid columns='repeat(1, 1fr)' gap='30px'>
								<Input
									type='text'
									name='subject'
									id='subject'
									placeholder='Subject'
								/>
							</Grid>
							<Grid columns='repeat(1, 1fr)' gap='30px'>
								<textarea
									name='message'
									id='message'
									placeholder='Message'></textarea>
							</Grid>
							<Grid columns='repeat(1, 1fr)' gap='30px'>
								<button type='submit'>Send Message</button>
							</Grid>
						</Flex>
					</form>
				</ContactInfoFormContent>
			</SectionContent>
		</SectionContainer>
	);
};

export default ContactInfoForm;
