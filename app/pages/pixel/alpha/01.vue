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
                    data[i + 3] = data[i + 3] * 0.5;  //透明度通道
                }
                context.putImageData(pixels, 300, 0);
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
