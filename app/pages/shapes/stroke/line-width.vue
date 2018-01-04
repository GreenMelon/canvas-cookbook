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

                context.moveTo(100, 100);
                context.lineTo(300, 300);
                context.lineTo(300, 100);
                context.lineTo(100, 100);

                // 定义线宽度
                context.lineWidth = 10;

                // 定义笔触颜色
                context.strokeStyle = '#c7254e';
                // 绘制
                context.stroke();
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
