import styled from 'styled-components';
import colors from '../theme/colors';

export const Figure = styled.figure`
    width: 100%;
    margin: 10px 0;
    box-sizing: border-box;
    
    & img {
        max-width: 100%;
    }
    
    & figcaption {
		font-family: 'Vollkorn', serif;
		font-size: .8rem;
		color: ${colors.darkGrey};
		padding: 5px 0;
    }
`;