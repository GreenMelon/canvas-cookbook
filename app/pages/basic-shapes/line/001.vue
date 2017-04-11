<style lang="less" scoped>
</style>

<template>
    <main>
        <canvas id="canvas"></canvas>
    </main>
</template>

<script>
    module.exports = {
        methods: {
            draw() {
                let canvas = document.getElementById('canvas');
                let context = canvas.getContext('2d');

                context.moveTo(0, 0);
                context.lineTo(100, 100);
                // context.lineWidth = 5;
                // context.strokeStyle = '#c7254e';
                context.stroke();
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
