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

            /**
            * 创建径向渐变(相对于画布而不是图形)
            * context.createRadialGradient(x0, y0, r0, x1, y1, r1);
            * (x0, y0, r0)  起点圆的圆心坐标和半径
            * (x1, y1, r1)  终点圆的圆心坐标和半径
            * 返回：CanvasGradient
            *
            * 给渐变的梯度线添加一种纯色
            * addColorStop(position, color)
            */

            let RadialGrad = context.createRadialGradient(400, 300, 100, 400, 300, 300);
            RadialGrad.addColorStop(0, 'red');
            RadialGrad.addColorStop(0.5, 'green');
            RadialGrad.addColorStop(1, 'blue');

            context.lineWidth = 20;
            context.strokeStyle = RadialGrad;
            context.strokeRect(160, 120, 160, 120);
        }
    },
    mounted() {
        this.draw();
    }
}
</script>
