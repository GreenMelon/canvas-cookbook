export function getRandomColor () {
    const maxHex = parseInt('0xffffff', 16);
    const randomNum = Math.floor(Math.random() * maxHex).toString(16);
    return `#${randomNum}`;
};

export function getPixelRatio(context) {
    const backingStore = context.backingStorePixelRatio
        || context.webkitBackingStorePixelRatio
        || context.mozBackingStorePixelRatio
        || context.msBackingStorePixelRatio
        || context.oBackingStorePixelRatio
        || 1;

    return (window.devicePixelRatio || 1) / backingStore;
}
