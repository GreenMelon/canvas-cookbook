<template>
    <main>
        <video
            id="video"
            :src="videoSrc"
            width="400"
            crossorigin="anonymous"
            controls
        />

        <button
            @click="draw">截图
        </button>

        <canvas
            id="canvas"
            width="400"
            height="300"
        />

        <img
            :src="imgSrc"
            alt=""
        >
    </main>
</template>

<script>
export default {
    alias: '视频截图',

    data() {
        return {
            canvas: null,
            context: null,
            video: null,
            videoSrc: 'https://cloud.video.taobao.com/play/u/2097687348/p/1/e/6/t/1/290315414979.mp4',
            imgSrc: '',
        }
    },

    mounted() {
        this.init();
    },

    methods: {
        init() {
            this.video = document.getElementById('video');
            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext('2d');
        },

        draw() {
            const {
                canvas,
                context,
                video,
                video: {
                    clientWidth,
                    clientHeight,
                },
            } = this;

            canvas.width = clientWidth;
            canvas.height = clientHeight;
            context.drawImage(video, 0, 0, clientWidth, clientHeight);
            this.imgSrc = this.canvas.toDataURL('image/png');
        },
    },
};
</script>
