<template>
    <main>
        <canvas id="canvas" width="800" height="600" class="border-canvas"></canvas>
    </main>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');
                const { width, height } = canvas;

                let i = 0;
                const rectWidth = 100;
                const rectHeight = 50;

                setInterval(() => {
                    i++;

                    context.clearRect(0, 0, width, height);
                    context.save();

                    context.translate(width / 2, height / 2);
                    context.rotate(Math.PI * (i / 100));

                    context.fillStyle = '#007dd4';
                    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);

                    context.restore();
                }, 10);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
