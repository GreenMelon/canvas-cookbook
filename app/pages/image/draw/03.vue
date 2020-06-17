<style scoped>
    img {
        width: 300px;
        height: auto;
    }
    canvas {
        position: absolute;
        z-index: -1;
    }
</style>

<template>
    <main>
        <div>
            <img src="~images/superman.jpg" id="img" alt="">
            <button @click="draw" type="button">draw</button>
        </div>

        <canvas id="canvas" width="800" height="600"></canvas>

        <img
            v-for="(img, index) in images"
            :key="index"
            :src="img"
        >
    </main>
</template>

<script>
// 绘制图片的一部分
export default {
    data() {
        return {
            canvas: null,
            context: null,
            images: [],
        }
    },
    methods: {
        draw(src) {
            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext('2d');

            const img = document.getElementById('img');

            // source, destination
            this.context.drawImage(img, 0, 0, 460, 230, 0, 0, 460, 230);

            this.exportImages();

            // source, destination
            this.context.drawImage(img, 0, 230, 460, 230, 0, 0, 460, 230);

            this.exportImages();
        },
        exportImages() {
            let url = this.canvas.toDataURL('image/png');
            this.images.push(url);
        },
    },
    mounted() {},
};
</script>
