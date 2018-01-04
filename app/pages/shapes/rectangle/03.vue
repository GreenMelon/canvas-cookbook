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

                context.fillStyle = '#007dd4';

                // context.fillRect(x, y, w, h);

                context.fillRect(10, 10, 80, 60);
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
