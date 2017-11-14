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

                context.lineWidth = 10;
                context.font = '100px sans-serif';

                context.fillStyle = '#c7254e';
                context.fillText('Cavas', 150, 150);
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
