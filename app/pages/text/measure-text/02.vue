<template>
    <main>
        <canvas
            id="canvas"
            width="400"
            height="300"
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

                const text = 'Canvas';
                context.lineWidth = 5;
                context.font = '50px sans-serif';
                context.fillStyle = '#c7254e';

                const canvasWidth = canvas.width;
                const textWidth = context.measureText(text).width;
                const x = canvasWidth / 2 - textWidth / 2;
                context.fillText(text, x, 50);
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
