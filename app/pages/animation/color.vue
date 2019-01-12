<style scoped>
    canvas {
        border: 1px dashed #000;
    }
</style>

<template>
    <main>
        <canvas id="canvas" width="400" height="300"></canvas>
    </main>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            init() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');
                const { width, height } = canvas;

                // 动画执行的帧数
                let start = 0;
                const frames = 200;
                // 过渡颜色 蓝色 到 红色
                const from = [0, 0, 255];
                const to = [255, 0, 0];

                // 动画算法，这里使用 Cubic.easeOut 算法
                const cubicEaseOut = function (t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t + 1) + b;
                };

                // 绘制方法
                const draw = function () {
                    context.clearRect(0, 0, width, height);

                    // 计算此时r, g, b数值
                    var r = cubicEaseOut(start, from[0], to[0] - from[0], frames);
                    var g = cubicEaseOut(start, from[1], to[1] - from[1], frames);
                    var b = cubicEaseOut(start, from[2], to[2] - from[2], frames);

                    // 可以确定色值
                    context.fillStyle = 'rgb('+ [r, g, b].join() +')';
                    context.arc(width / 2, height / 2, height / 2, 0, 2 * Math.PI);
                    context.fill();
                    
                    // 持续变化
                    start++;
                    if (start <= frames) {
                        requestAnimationFrame(draw);    
                    }
                };
                draw();
            },
        },
        mounted() {
            this.init();
        },
    }
</script>
