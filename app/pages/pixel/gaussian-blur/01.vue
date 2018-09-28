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
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                const img = document.getElementById('img');
                context.drawImage(img, 0, 0, 200, 200);

                const pixels = context.getImageData(0, 0, 200, 200);
                const { data } = pixels;

                const blurR = 4;
                const totalNum = (2 * blurR + 1) * (2 * blurR + 1);
                for (let i = blurR; i < 200 - blurR; i++) {
                    for (let j = blurR; j < 200 - blurR; j++) {
                        let totalR = 0, totalG = 0, totalB = 0;
                        for (let dx = -blurR; dx <= blurR; dx++) {
                            for (let dy = -blurR; dy <= blurR; dy++) {
                                let x = i + dx;
                                let y = j + dy;
                                let p = x * 200 + y;
                                const rgba = this.getRGBA(data, p);
                                totalR += rgba.r;
                                totalG += rgba.g;
                                totalB += rgba.b;
                            }
                        }
                        let pexel = i * 200 + j;
                        data[pexel * 4 + 0] = totalR / totalNum;
                        data[pexel * 4 + 1] = totalG / totalNum;
                        data[pexel * 4 + 2] = totalB / totalNum;
                    }
                }

                context.putImageData(pixels, 300, 0);
            },
            getRGBA(pixels, i) {
                return {
                    r: pixels[4 * i + 0],
                    g: pixels[4 * i + 1],
                    b: pixels[4 * i + 2],
                    a: pixels[4 * i + 3],
                }
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
