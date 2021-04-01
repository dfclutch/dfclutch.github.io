import colors from '../../theme/colors';
import styled from 'styled-components';

export const ArticleWrapper = styled.div`
	margin-top: 10px;

	p {
		font-family: 'Vollkorn', serif;
		text-align: justify;
	}
	
	a {
		text-decoration: none;
		color: ${colors.blue};
	}
	
	a:visited {
		color: ${colors.blue};
	}
	
	a:hover {
		color: ${colors.yellow};
	}
`;

export const ArticleTitle = styled.h1`
	color: ${colors.blue};
	font-size: 2.6rem;
`;

export const Date = styled.div`
	color: ${colors.darkGrey};
	font-style: italic;
	font-family: 'Vollkorn', serif;
`;