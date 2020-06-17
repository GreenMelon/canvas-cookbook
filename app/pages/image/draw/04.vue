<style lang="less" scoped>
    canvas {
        border: 1px dashed #000;
    }
    .wrap {
        display: inline-block;
        width: 80px;
        height: 80px;
        img {
            width: 100%;
        }
    }
</style>

<template>
    <main>
        <canvas
            id="canvas"
            width="80"
            height="80">
        </canvas>

        <button @click="drawImg">draw</button>

        <div id="containner">
            <div class="wrap">
                <img
                    @dragstart="startDragImg($event)"
                    @drag="onDrag($event)"
                    draggable="true"
                    src="~images/superman.jpg"
                    id="img"
                    alt=""
                >
            </div>
            <img
                v-for="image in images"
                :src="image"
                alt=""
            >
        </div>

    </main>
</template>

<script>
// 绘制图片和文字
export default {
    data() {
        return {
            canvas: null,
            context: null,
            ratio: .2,
            images: [],
        }
    },
    methods: {
        init() {
            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext('2d');
        },
        generateImg(img) {
            const { canvas, context } = this;
            let { ratio } = this;

            context.save();
            context.clearRect(0, 0, canvas.width, canvas.height);

            // 缩放画布
            ratio = 80 / img.naturalWidth;
            context.scale(ratio, ratio);

            // 绘制图片
            context.drawImage(img, 0, 0);

            // 绘制背景
            let coords = [0, 60, 80, 20];
            coords = coords.map(i => i / ratio);
            context.fillStyle = 'rgba(0, 128, 255, 0.8)';
            context.fillRect(coords[0], coords[1], coords[2], coords[3]);

            // 绘制文字
            context.font = `${12 / ratio}px sans-serif`;
            context.fillStyle = '#fff';
            context.fillText('按 alt 键复制', 5 / ratio, 75 / ratio);

            context.restore();

            // 导出图片
            return canvas.toDataURL('image/png');
        },
        drawImg() {
            const img = document.getElementById('img');

            const url = this.generateImg(img);
            this.images.push(url);
        },
        startDragImg(ev) {
            console.log('startDragImg');

            ev.dataTransfer.setDragImage(this.canvas, 0, 0);
        },
        onDrag(ev) {
            console.log('onDrag');
        },
    },
    mounted() {
        this.init();
    },
};
</script>
