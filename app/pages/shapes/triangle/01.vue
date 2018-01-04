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

                context.beginPath();
                context.moveTo(100, 100);  // 顶点1
                context.lineTo(300, 300);  // 顶点2
                context.lineTo(300, 100);  // 顶点3
                context.lineTo(100, 100);  // 顶点1
                context.closePath();

                context.stroke();
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
