const chance = {
    between: (min, max) => {
        return Math.floor(Math.random() * (max - min) + min) + 1;
    }
};