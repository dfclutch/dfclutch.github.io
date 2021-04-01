import styled from 'styled-components';

import colors from '../theme/colors';

export const Content = styled.div`
	width: ${() => window.mobileCheck() ? "100vw" : "50vw" };
	padding: ${() => window.mobileCheck() ? "5px" : "10px" };
	box-sizing: border-box;
	margin: 0 auto;
	min-height: 100vh;
	background-color: white;
`;