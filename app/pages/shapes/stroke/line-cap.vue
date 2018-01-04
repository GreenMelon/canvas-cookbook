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
                const { width, height } = canvas;

                const lineLength = width / 2;
                const gap = 50;
                const startPoint = {
                    x: width / 4,
                    y: height / 2,
                };
                const { x, y } = startPoint;

                const capStyles = [
                    'butt',   //默认,无线帽
                    'round',  //圆的
                    'square'  //平的
                ];
                const fillStyles = ['red', 'green', 'blue'];

                context.lineWidth = 20;

                capStyles.forEach((style, index) => {
                    context.beginPath();
                    context.strokeStyle = fillStyles[index];
                    context.lineCap = style;
                    context.moveTo(x, y + (index -1) * gap);
                    context.lineTo(x + lineLength, y + (index -1) * gap);
                    console.log(x, y + (index -1) * gap);
                    context.stroke();
                });
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
