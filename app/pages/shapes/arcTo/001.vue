<template>
    <main>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                let canvas = document.getElementById('canvas');
                let context = canvas.getContext('2d');

                // 路径的起始点
                context.moveTo(50, 50);
                // 弧线的起始端点
                context.lineTo(50, 50);

                // 端点1
                let pointA = { x: 200, y: 50 };
                // 端点2
                let pointB = { x: 200, y: 100 };

                context.arcTo(pointA.x, pointA.y, pointB.x, pointB.y, 50);

                context.lineWidth = 2;
                context.strokeStyle = '#c7254e';
                context.stroke();
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
