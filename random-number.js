let getRandomNumberInBound = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
module.exports = getRandomNumberInBound;