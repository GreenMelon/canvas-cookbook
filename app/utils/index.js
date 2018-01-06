const getRandomColor = () => {
    const maxHex = parseInt('0xffffff', 16);
    const randomNum = Math.floor(Math.random() * maxHex).toString(16);
    return `#${randomNum}`;
};

export default {
    getRandomColor,
};
