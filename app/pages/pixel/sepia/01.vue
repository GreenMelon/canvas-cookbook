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

                for (let i = 0; i < data.length; i += 4) {
                    const [r, g, b] = [data[i + 0], data[i + 1], data[i + 2]];

                    data[i + 0] = r * 0.39 + g * 0.76 + b * 0.18;  //红色通道
                    data[i + 1] = r * 0.35 + g * 0.68 + b * 0.16;  //绿色通道
                    data[i + 2] = r * 0.27 + g * 0.53 + b * 0.13;  //蓝色通道
                }

                context.putImageData(pixels, 300, 0);
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
