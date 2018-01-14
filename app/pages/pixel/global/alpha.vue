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

                context.globalAlpha = '0.3';

                const text = 'globalAlpha';
                context.font = '50px bold serif';
                context.fillStyle = '#007dd4';
                context.fillText(text, 0, 50);

                context.globalAlpha = '1';

                context.fillStyle = '#c7254e';
                context.fillRect(0, 100, 200, 150);
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
