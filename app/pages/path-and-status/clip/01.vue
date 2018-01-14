<template>
    <main>
        <canvas id="canvas" width="400" height="300"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                context.arc(200, 150, 100, 0, 360 * Math.PI / 180, true);

                context.strokeStyle = '#007dd4';
                context.stroke();

                // 使得描边圆成为一个剪切区域,超过该区域不显示
                context.clip();

                context.beginPath();
                context.fillStyle = '#c7254e';
                context.fillRect(0, 100, 400, 100);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
