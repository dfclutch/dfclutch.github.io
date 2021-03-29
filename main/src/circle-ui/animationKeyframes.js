import { keyframes } from 'styled-components';

import { colors } from '../colors';

const startingAngle = "-220";

export function buildRotationKeyFrame(finalAngle) {
    return keyframes`
        from {
            transform: rotate(${startingAngle}deg);
        }

        to {
            transform: rotate(${finalAngle}deg);
        }
    `;
}

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const contentFade = keyframes`
    0% {
        background-color: ${colors.white};
    }

    100% {
        background-color: ${colors.black};
    }
`;
