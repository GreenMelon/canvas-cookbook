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

                const a = 50;
                for (let i = 0; i < data.length; i += 4) {
                    data[i + 0] += a;  //红色通道
                    data[i + 1] += a;  //绿色通道
                    data[i + 2] += a;  //蓝色通道
                }

                context.putImageData(pixels, 300, 0);

                const b = -100;
                for (let i = 0; i < data.length; i += 4) {
                    data[i + 0] += b;  //红色通道
                    data[i + 1] += b;  //绿色通道
                    data[i + 2] += b;  //蓝色通道
                }

                context.putImageData(pixels, 600, 0);
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
