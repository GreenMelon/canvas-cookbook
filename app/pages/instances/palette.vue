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

                this.createSquarePalette(context);
                this.createGradientPalette(context);
            },
            createSquarePalette(cxt) {
                const [rows, cols] = [9, 9];
                const dx = 25;
                const dy = 25;
                const colorStep = 255 / rows;

                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        cxt.fillStyle = `rgb(${Math.floor(255 - colorStep * i)}, ${Math.floor(255 - colorStep * j)}, 0)`;
                        cxt.fillRect(dx * j, dy * i, dx, dy);
                    }
                }
            },
            createGradientPalette(cxt) {
                let r = 255;
                let g = 0;
                let b = 0;

                for (let i = 0; i < 150; i++) {
                    if (i < 25) {
                        g += 10;
                    } else if (i > 25 && i < 50) {
                        r -=10;
                    } else if (i > 50 && i < 75) {
                        g -=10;
                        b += 10;
                    } else if (i > 75 && i < 100) {
                        r += 10;
                    } else {
                        b -=10;
                    }
                    cxt.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    cxt.fillRect(3 * i, 300, 3, 150);
                }
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
