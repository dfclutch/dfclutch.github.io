import React from 'react';

import {
	Rotated,
	RotatedText
} from './CircleElementStyles';

const CircleElement = (props) => {
	return (
		<Rotated 
			angle={props.angle}
			index={props.index}
			duration={props.duration}
			radius={props.radius}
		>
			<RotatedText
				as={ props.link ? "a" : ""}
				href={ props.link }
				target="_blank"
				active={ props.active }
				onClick = { () => {
					if (props.page) {
						props.onClick(props.id);
					}
				}}
				radius={props.radius}
			>
				{ props.text }
			</RotatedText>
		</Rotated>
	)
}

export default CircleElement;