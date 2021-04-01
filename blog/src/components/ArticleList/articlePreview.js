import React from 'react';
import styled from 'styled-components';

import colors from '../../colors.js'

const ArticlePreviewContainer = styled.div`
	margin: 0 0 10px 0;
	border-top: 1px solid black;
	padding: 6px 12px;
	font-size: 16px;

	&:hover {
		cursor: pointer;
	}

	&:hover h2 {
			color: ${colors.yellow};
	}
	
	> p {
		color: black;
	}
`;

const ArticleTitle = styled.h2`
	color: ${colors.blue};
	font-size: 2rem;
	margin: 0;
`;

const PreviewText = styled.p`
	text-align: justify;
	font-family: 'Vollkorn', serif;
`;

export const ArticlePreview = ({
	onClick,
	previewText,
	title,
}) => {
	return (
		<ArticlePreviewContainer onClick={onClick} >
			<ArticleTitle>
				{ title }
			</ArticleTitle>
			<PreviewText>
				{ previewText }
			</PreviewText>
		</ArticlePreviewContainer>
	)
}