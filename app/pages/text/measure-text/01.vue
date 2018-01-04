<template>
    <main>
        <canvas
            id="canvas"
            width="400"
            height="300"
            style="border: 1px dashed #000;"
        ></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                const text = 'Canvas';
                context.lineWidth = 5;
                context.font = '50px sans-serif';
                context.fillStyle = '#c7254e';
                context.fillText(text, 10, 50);

                const width = context.measureText(text).width;
                console.log('文本长度: ', width);

                /**
                 * 文本长度和 canvas 的宽度无关(溢出也没关系)
                 * 文本长度和 fillText 的 maxWidth 无关(压缩也没关系)
                 * 文本长度和 fontSize 有关
                 */
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
