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

                this.createPolygon(context, 3, 100, 75, 50);

                context.fillStyle = 'pink';
                context.fill();
            },
            createPolygon(cxt, n, centerX, centerY, radius) {
                const degree = (2 * Math.PI) / n;
                let dx;
                let dy;

                cxt.beginPath();

                for (let i = 0; i < n; i++) {
                    dx = Math.cos(i * degree) * radius;
                    dy = Math.sin(i * degree) * radius;
                    cxt.lineTo(centerX + dx, centerY + dy);
                }

                cxt.closePath();
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
