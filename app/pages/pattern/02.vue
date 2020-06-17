<style scoped>
    p {
        font-size: 20px;
        color: #007dd4;
    }
</style>

<template>
    <main>
        <div>
            <p id="content">Canvas</p>
            <button @click="draw" type="button">draw</button>
        </div>

        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
// 文字平铺
export default {
    data() {
        return {
            canvas: null,
            context: null,
        }
    },
    methods: {
        draw(src) {
            try {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');

                const content = document.getElementById('content');
                this.context.drawImage(content, 0, 0, 300, 100);

                /**
                    * 无法实现!!! 因为源对象必须为一下几个值
                    *
                    * CSSImageValue ???
                    * HTMLImageElement
                    * SVGImageElement
                    * HTMLVideoElement
                    * HTMLCanvasElement
                    * ImageBitmap
                    * OffscreenCanvas
                    */
            } catch (error) {
                
            }
        },
    },
    mounted() {
        this.draw();
    },
};
</script>
