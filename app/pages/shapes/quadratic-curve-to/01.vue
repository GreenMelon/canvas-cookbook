<template>
    <main>
        <canvas
            id="canvas"
            width="800"
            height="600"
            style="border: 1px dashed #000;"
        ></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                context.lineWidth = 5;
                context.strokeStyle = '#007dd4';

                // 开始点
                context.moveTo(50, 300);

                // 控制点和结束点
                // context.quadraticCurveTo(cx, cy, x2, y2);
                context.quadraticCurveTo(210, 100, 220, 300);
                context.quadraticCurveTo(350, -200, 450, 300);
                context.quadraticCurveTo(500, 100, 600, 300);
                context.stroke();
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
