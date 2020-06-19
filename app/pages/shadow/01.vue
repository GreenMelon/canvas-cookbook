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

            context.shadowOffsetX = 5;
            context.shadowOffsetY = 5;
            context.shadowColor = '#007dd4';
            context.shadowBlur = 10;

            context.fillStyle = '#c7254e';
            context.fillRect(0, 0 , 80, 60);

            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowColor = '#007dd4';
            context.shadowBlur = 30;
            context.font = '100px sans-serif';
            context.fillText('Canvas', 100, 200);
        },
    },
    mounted() {
        this.draw();
    },
};
</script>
