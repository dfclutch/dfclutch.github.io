import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from './ContentContainer';
import { mobileCheck } from '../mobile_check';

const AboutContentContainer = styled(ContentContainer)`
	margin: ${
		() => (
			window.mobileCheck()
			? "0vw 5vw"
			: "0vh 6vh"
		)
	};
	padding-top: ${
		() => (
			window.mobileCheck()
			? "2vw"
			: "3vh"
		)
	};
	font-size: ${
		() => (
			window.mobileCheck()
			? "24px"
			: "16px"
		)
	};
	text-align: justify;
	max-height: 50vh;
	max-width: ${
		() => (
			window.mobileCheck()
			? "54vw"
			: "48vh"
		)
	};
	border-radius: 0px;

	h1 {
		text-align: center;
	}

	div {
		text-align: center;
	}
`;

export const AboutContent = () => {
	return (
		<AboutContentContainer mobile={mobileCheck()}>
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
				comuptation theory and graph theory. I play <a href="https://rateyourmusic.com/genre/American+Primitivism/" target="_blank">
				American Primitive guitar</a>, practice <a href="https://lighterpack.com/r/73c46t" target="_blank"> ultralight backpacking </a> 
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