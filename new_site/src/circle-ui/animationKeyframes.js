import { keyframes } from 'styled-components';

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
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;
