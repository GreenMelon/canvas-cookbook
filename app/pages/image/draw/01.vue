<template>
    <main>
        <div>
            <img src="~assets/icon-smile.png" id="img" alt="">
        </div>

        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
// 绘制页面上的图片
export default {
    data() {
        return {
            canvas: null,
            context: null,
        }
    },
    methods: {
        draw(src) {
            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext('2d');

            const img = document.getElementById('img');
            this.context.drawImage(img, 0, 0);
        },
    },
    mounted() {
        this.draw();
    },
};
</script>
