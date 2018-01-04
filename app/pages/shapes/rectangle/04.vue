<template>
    <main>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                // 绘制实心矩形
                context.fillRect(10, 10, 80, 60);

                // 清除矩形
                context.clearRect(10, 10+5, 80, 60-10);
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
