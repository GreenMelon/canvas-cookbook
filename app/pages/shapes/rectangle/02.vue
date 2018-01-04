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

                context.lineWidth = 5;
                context.strokeStyle = '#007dd4';

                // context.strokeRect(x, y, w, h);

                context.strokeRect(10, 10, 80, 60);
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
