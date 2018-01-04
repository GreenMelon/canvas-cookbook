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

                this.createRoundedRectangle(context, 10, 10, 300, 150, 20);

                context.lineWidth = 10;
                context.strokeStyle = 'orange';
                context.stroke();

                context.fillStyle = 'purple';
                context.fill();
            },
            createRoundedRectangle(cxt, x, y, width, height, r) {
                cxt.beginPath();

                cxt.moveTo(x + r, y);
                cxt.lineTo(x + width - r, y);
                cxt.arcTo(x + width, y, x + width, y + r, r);
                cxt.lineTo(x + width, y + height - r);
                cxt.arcTo(x + width, y + height, x + width - r, y + height, r);
                cxt.lineTo(x + r, y + height);
                cxt.arcTo(x, y + height, x, y + height - r, r);
                cxt.lineTo(x, y + r);
                cxt.arcTo(x, y, x + r, y, r);

                cxt.closePath();
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
