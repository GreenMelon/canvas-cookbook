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

                const LinearGrad = context.createLinearGradient(300, 0, 500, 0);
                LinearGrad.addColorStop(0, 'red');
                LinearGrad.addColorStop(0.16, 'orange');
                LinearGrad.addColorStop(0.32, 'yellow');
                LinearGrad.addColorStop(0.48, 'green');
                LinearGrad.addColorStop(0.64, 'blue');
                LinearGrad.addColorStop(0.80, 'indigo');
                LinearGrad.addColorStop(1, 'violet');

                context.strokeStyle = LinearGrad;
                context.lineWidth = 10;
                context.arc(400, 300, 100, 0, 360 * Math.PI / 180);
                context.stroke();
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
