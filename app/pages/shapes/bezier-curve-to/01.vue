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

                context.lineWidth = 5;
                context.strokeStyle = 'red';

                // 开始点
                context.moveTo(75, 40);

                // 两个控制点和一个结束点
                // context.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
                context.bezierCurveTo(75, 37, 70, 25, 50, 25);
                context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                context.bezierCurveTo(20, 80, 40, 102, 75, 120);
                context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                context.bezierCurveTo(85, 25, 75, 37, 75, 40);

                context.stroke();
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
