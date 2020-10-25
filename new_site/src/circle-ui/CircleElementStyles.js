import styled from 'styled-components';
import { fadeIn, rotations } from './animationKeyframes';
import { colors } from '../colors';

export const Rotated = styled.div`
    position: absolute;
    top: calc(50% - 16px);
    left: calc(50% - ${() => window.mobileCheck() ? "36vw" : "35vh"});
    transform-origin: 50% 50%;
    transform: rotate(${props => props.angle}deg);
    width: ${() => window.mobileCheck() ? "72vw" : "70vh"};
    animation: ${fadeIn} ${props => props.duration}, ${
        props => rotations[props.index]
    } 2s;
`;

export const RotatedText = styled.div`
	transform: rotate(180deg);
    padding: 0;
    margin-left: ${() => window.mobileCheck() ? "72vw" : "70vh"};
    display: inline-block;
    font-size: ${() => window.mobileCheck() ? "36" : "28"}px;
    color: ${props => props.active ? colors.accent : colors.neutral};

    &:hover {
        color: ${colors.accent};
        font-weight: 700;
    }

    & a {
        color: ${props => props.active ? colors.accent : colors.neutral};
    }

    & a:visited {
        color: ${props => props.active ? colors.accent : colors.neutral};
    }
`;