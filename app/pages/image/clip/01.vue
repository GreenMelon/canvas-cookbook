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
        data() {
            return {}
        },
        methods: {
            draw(src) {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                // Step1: 绘制遮罩图形
                context.beginPath();
                context.arc(150, 150, 150, 0, 360 * Math.PI / 180, false);
                context.closePath();
                context.stroke();

                // Step2: clip方法使得切割后可显示区域为上面绘制的图形
                context.clip();

                // Step3: 绘制图片
                const img = document.getElementById('img');
                context.drawImage(img, 0, 0, 300, 300);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
