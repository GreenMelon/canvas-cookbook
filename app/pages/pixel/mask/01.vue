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

                // 红色蒙版
                for (let i = 0; i < data.length; i += 4) {
                    const [r, g, b] = [data[i + 0], data[i + 1], data[i + 2]];
                    const average = (r + g + b) / 3;
                    data[i + 0] = average;  //红色通道
                    data[i + 1] = 0;        //绿色通道
                    data[i + 2] = 0;        //蓝色通道
                }
                context.putImageData(pixels, 200, 0);

                // 绿色蒙版
                for (let i = 0; i < data.length; i += 4) {
                    const [r, g, b] = [data[i + 0], data[i + 1], data[i + 2]];
                    const average = (r + g + b) / 3;
                    data[i + 0] = 0;        //红色通道
                    data[i + 1] = average;  //绿色通道
                    data[i + 2] = 0;        //蓝色通道
                }
                context.putImageData(pixels, 400, 0);

                // 蓝色蒙版
                for (let i = 0; i < data.length; i += 4) {
                    const [r, g, b] = [data[i + 0], data[i + 1], data[i + 2]];
                    const average = (r + g + b) / 3;
                    data[i + 0] = 0;        //红色通道
                    data[i + 1] = 0;        //绿色通道
                    data[i + 2] = average;  //蓝色通道
                }
                context.putImageData(pixels, 600, 0);
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
