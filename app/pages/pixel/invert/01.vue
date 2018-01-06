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
                // 遍历每个像素的每个通道
                for (let i = 0; i < data.length; i += 4) {
                    data[i + 0] = 255 - data[i + 0];  //红色通道
                    data[i + 1] = 255 - data[i + 1];  //绿色通道
                    data[i + 2] = 255 - data[i + 2];  //蓝色通道
                    // data[i + 3] = data[i + 3];        //透明度不处理
                }

                context.putImageData(pixels, 300, 0);
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
