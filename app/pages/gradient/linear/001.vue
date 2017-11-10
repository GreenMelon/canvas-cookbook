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

                /**
                * 创建线性渐变(相对于画布而不是图形)
                * context.createLinearGradient(x0, y0, x1, y1);
                * (x0, y0)  开始坐标
                * (x1, y1)  结束坐标
                * 返回：CanvasGradient
                *
                * 给渐变的梯度线添加一种纯色
                * addColorStop(position, color)
                */

                let LinearGrad = context.createLinearGradient(10, 10, 250, 150);
                LinearGrad.addColorStop(0, 'red');
                LinearGrad.addColorStop(0.5, 'green');
                LinearGrad.addColorStop(1, 'blue');

                context.fillStyle = LinearGrad;
                context.fillRect(10, 10, 250, 150);
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
