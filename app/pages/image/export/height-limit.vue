<style lang="less" scoped>
#img {
    display: none;
}
</style>

<template>
    <main>
        <div>
            <h1> Canvas 合并截图 超高限制 </h1>
            <button
                @click="exportImage"
                type="button">export
            </button>
        </div>

        <img
            src="~images/superman.jpg"
            id="img"
        >

        <canvas
            id="canvas"
        ></canvas>

        <img
            v-for="(img, index) in images"
            :key="index"
            :src="img"
        >
    </main>
</template>

<script>
    export default {
        data() {
            return {
                canvas: null,
                context: null,
                images: [],
                references: [
                    {
                        title: '[javascript] 一个<canvas>元素的最大尺寸',
                        url: 'https://code.i-harness.com/zh-CN/q/5ccbcb',
                    }, {
                        title: 'maximum-size-of-a-canvas-element',
                        url: 'https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element',
                    }, {
                        title: 'canvas-3',
                        url: 'http://landcareweb.com/questions/3323/canvas-yuan-su-de-zui-da-da-xiao',
                    }
                ],
                try: [
                    '设置了高度就不可用还是 drawImage 的时候',
                    '宽度限制？高度限制？总面积限制？',
                    '浏览器差异？',
                    // Chrome：
                    // 最大高度/宽度：32,767像素 最大面积：268,435,456像素（例如16,384 x 16,384）
                    // 火狐：
                    // 最大高度/宽度：32,767像素 最大面积：472,907,7​​76像素（例如22,528 x 20,992）
                    // IE：
                    // 最大高度/宽度：8,192像素 最大面积：N / A
                    '整个不显示还是超出部分不显示',
                    '离屏canvas？',
                ],
            }
        },
        methods: {
            drawImage() {
                let canvas = document.getElementById('canvas');
                canvas.width = 460;
                canvas.height = 16000;
                // canvas.height = 8192; // IE 限制
                // canvas.height = 32767; // Chrome 限制：Math.log2(32767 + 1) === 15
                this.canvas = canvas;

                this.context = canvas.getContext('2d');

                const img = document.getElementById('img');
                this.context.drawImage(img, 0, 0);
            },
            exportImage() {
                const url = this.canvas.toDataURL('image/png');
                this.images.push(url);
            },
        },
        mounted() {
            this.drawImage();
        },
    };
</script>
