<template>
    <main>
        <canvas id="canvas" width="800" height="600" class="border-canvas"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                const coords = [50, 50, 400, 300];
                const [x1, y1, x2, y2] = coords;
                context.fillStyle = '#007dd4';
                context.fillRect(x1, y1, x2 - x1, y2 - y1);

                const ratio = 0.8;

                const centerX1 = x1 + (x2 - x1) / 2;
                const centerY1 = y1 + (y2 - y1) / 2;

                context.scale(ratio, ratio);
                context.translate(centerX1 / ratio - centerX1, centerY1 / ratio - centerY1);

                context.fillStyle = '#c7254e';
                context.fillRect(x1, y1, x2 - x1, y2 - y1);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
