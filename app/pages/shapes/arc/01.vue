<template>
    <main>
        <canvas id="canvas" width="1024" height="600"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                const x = 50, y = 50, r = 20, d = 100;

                context.strokeStyle = '#c7254e';

                for (var i = 0; i < 10; i++) {
                    context.beginPath();
                    context.arc(x+i*d, y, r, 0, 2*Math.PI*(i+1)/10);
                    context.stroke();

                    context.beginPath();
                    context.arc(x+i*d, 3*y, r, 0, 2*Math.PI*(i+1)/10, true);
                    context.stroke();
                }

                context.fillStyle = '#c7254e';

                for (var i = 0; i < 10; i++) {
                    context.beginPath();
                    context.arc(x+i*d, 6*y, r, 0, 2*Math.PI*(i+1)/10);
                    context.fill();

                    context.beginPath();
                    context.arc(x+i*d, 9*y, r, 0, 2*Math.PI*(i+1)/10, true);
                    context.fill();
                }
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
