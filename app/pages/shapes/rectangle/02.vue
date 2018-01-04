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

                // 方法一
                // context.fillRect(x, y, w, h);
                context.fillRect(10, 10, 80, 60);

                // 方法二
                // context.rect(x, y, w, h);
                context.rect(100, 10, 80, 60);
                context.fill();
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
