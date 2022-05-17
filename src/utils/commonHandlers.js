export const handleSumTotal = (array) => {
    const reducer = (acc, cv) => acc + cv.price;
    return array.reduce(reducer, 0);
};
