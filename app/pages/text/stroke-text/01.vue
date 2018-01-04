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

                context.lineWidth = 5;
                context.font = '200px sans-serif';

                context.strokeStyle = '#c7254e';
                /**
                 * context.strokeText(text, x, y, maxWidth);
                 * text 字符串文本
                 * x 文本最左边坐标
                 * y 文本最下边坐标
                 * maxWidth 最大宽度,超出的话会压缩整个字符串
                 */

                context.strokeText('Canvas', 10, 200);
                context.strokeText('菜瓜', 10, 400, 200);
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
