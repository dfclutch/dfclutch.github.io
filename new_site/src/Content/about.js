import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from './ContentContainer';

const AboutContentContainer = styled(ContentContainer)`
	box-sizing: border-box;
	padding: 3vh 5vh 0 5vh;
	text-align: justify;
	max-height: 50vh;
	border-radius: 0px;

	h1 {
		text-align: center;
	}

	div {
		text-align: center;
	}

	a {
		z-index: 1;
		padding: 1rem;
		margin: -1rem;
	}
`;

export const AboutContent = () => {
	return (
		<AboutContentContainer>
			<h1>Dan Filler</h1>
			<p> 
				Pennsylvania native and Ohio State graduate. 
				Frontend software engineer, currently working at 
				<a href="https://www2.xant.ai/" target="_blank"> Xant</a>.
			</p>
			<p>
				I specialize in building React/Redux applications and pride myself
				on writing performant and maintainable code at enterprise scale.
			</p>
			<p>
				I am interested in other areas of computer science including 
				comuptation theory and graph theory. I play <a href="" target="_blank">
				American Primitive guitar</a>, practice <a href="" target="_blank"> ultralight backpacking </a> 
				and draw landscapes and buildings.
			</p>
			<div>
			<a href="http://github.com/dfclutch" target="_blank">github</a> | 
           	<a href="https://www.linkedin.com/in/dan-filler/" target="_blank"> LinkedIn</a> | 
           	<a href="mailto:dwfiller@gmail.com"> dwfiller@gmail.com</a>
           	</div>
		</AboutContentContainer>
	);
}