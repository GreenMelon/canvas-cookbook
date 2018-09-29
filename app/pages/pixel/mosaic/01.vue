<style scoped>
    img {
        display: none;
    }
</style>

<template>
    <main>
        <div>
            <img src="~images/superman.jpg" id="img" alt="">
            <button @click="draw" type="button">draw</button>
        </div>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            getRGBA(pixelArray, i) {
                return {
                    r: pixelArray[4 * i + 0],
                    g: pixelArray[4 * i + 1],
                    b: pixelArray[4 * i + 2],
                    a: pixelArray[4 * i + 3],
                }
            },
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');
                const $width = 200;
                const $height = 200;

                const img = document.getElementById('img');
                context.drawImage(img, 0, 0, $width, $height);

                const pixels = context.getImageData(0, 0, $width, $height);
                const { data } = pixels;

                const tempPixels = context.getImageData(0, 0, $width, $height);
                let { data: tempData } = tempPixels;

                const size = 10;
                const totalNum = size * size;
                for (let i = 0; i < $height; i += size) {
                    for (let j = 0; j < $width; j += size) {
                        let totalR = 0, totalG = 0, totalB = 0;
                        for (let dx = 0; dx < size; dx++) {
                            for (let dy = 0; dy < size; dy++) {
                                let x = i + dx;
                                let y = j + dy;
                                let p = x * $width + y;
                                let rgba = this.getRGBA(tempData, p);
                                totalR += rgba.r;
                                totalG += rgba.g;
                                totalB += rgba.b;
                            }
                        }
                        const rangeR = totalR / totalNum;
                        const rangeG = totalG / totalNum;
                        const rangeB = totalB / totalNum;

                        for (let dx = 0; dx <= size; dx++) {
                            for (let dy = 0; dy <= size; dy++) {
                                let x = i + dx;
                                let y = j + dy;
                                let p = x * $width + y;
                                data[p * 4 + 0] = rangeR;
                                data[p * 4 + 1] = rangeG;
                                data[p * 4 + 2] = rangeB;
                            }
                        }
                    }
                }

                context.putImageData(pixels, 300, 0);
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
