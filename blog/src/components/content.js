import styled from 'styled-components';

import colors from '../colors';

export const Content = styled.div`
	width: ${() => window.mobileCheck() ? "100%" : "50%" };
	padding: ${() => window.mobileCheck() ? "5px" : "10px" };
	box-sizing: border-box;
	margin: 0 auto;
	min-height: 100vh;
	background-color: ${() => window.mobileCheck() ? colors.yellow : "white" };
`;