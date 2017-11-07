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

                context.lineWidth = 5;
                context.strokeRect(10, 10, 50, 50);
                // context.fillRect(10, 10, 50, 50);

            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
