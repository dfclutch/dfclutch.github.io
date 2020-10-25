import styled from 'styled-components';
import { fadeIn, buildRotationKeyFrame } from './animationKeyframes';
import { colors } from '../colors';

export const Rotated = styled.div`
    position: absolute;
    top: calc(50% - 16px);
    left: calc(${() => window.mobileCheck() ? "55% - 37vw" : "50% - 35vh"});
    transform-origin: 50% 50%;
    transform: rotate(${props => props.angle}deg);
    width: ${() => window.mobileCheck() ? "74vw" : "70vh"};
    animation: ${fadeIn} ${props => props.duration}, ${
        props => buildRotationKeyFrame(props.angle)
    } 1s;

    z-index: -100;
`;

export const RotatedText = styled.div`
    transform: rotate(180deg);
    position: relative
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: -15px;
    margin-bottom: -15px;
    margin-left: ${() => window.mobileCheck() ? "74vw" : "70vh"};
    display: inline-block;
    font-size: ${() => window.mobileCheck() ? "36" : "28"}px;
    color: ${props => props.active ? colors.accent : colors.lightTheme};
    z-index: 100;

    &:hover {
        font-weight: 700;
        cursor: pointer;
    }

    & a {
        color: ${props => props.active ? colors.accent : colors.neutral};
    }

    & a:visited {
        color: ${props => props.active ? colors.accent : colors.neutral};
    }
`;