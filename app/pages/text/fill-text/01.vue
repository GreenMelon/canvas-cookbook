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

                context.lineWidth = 10;
                context.font = '100px sans-serif';

                context.fillStyle = '#c7254e';
                context.fillText('Canvas', 150, 150);
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
