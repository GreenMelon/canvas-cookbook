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

                // 定义填充颜色
                context.fillStyle = '#c7254e';
                // 填充
                context.fill();
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
