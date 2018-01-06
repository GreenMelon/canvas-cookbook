<template>
    <main>
        <canvas id="canvas" width="800" height="600" class="border-canvas"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                context.fillStyle = '#007dd4';
                context.fillRect(30, 30, 100, 100);

                // 整个坐标系平移,而不是图形位移
                context.translate(100, 100);
                context.fillStyle = '#c7254e';
                context.fillRect(30, 30, 100, 100);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
