import { keyframes } from 'styled-components';

const rotate1 = keyframes`
    from {
        transform: rotate(-220deg);
    }

    to {
        transform: rotate(-120deg);
    }
`;

const rotate2 = keyframes`
    from {
        transform: rotate(-220deg);
    }

    to {
        transform: rotate(-140deg);
    }
`;

const rotate3 = keyframes`
    from {
        transform: rotate(-220deg);
    }

    to {
        transform: rotate(-160deg);
    }
`;

const rotate4 = keyframes`
    from {
        transform: rotate(-220deg);
    }

    to {
        transform: rotate(-180deg);
    }
`;

const rotate5 = keyframes`
    from {
        transform: rotate(-220deg);
    }

    to {
        transform: rotate(-200deg);
    }
`;

const rotate6 = keyframes`
    from {
        transform: rotate(-220deg);
    }

    to {
        transform: rotate(-220deg);
    }
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const rotations = [
    rotate1,
    rotate2,
    rotate3,
    rotate4,
    rotate5,
    rotate6
];