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
// 视频截图
export default {
    alias: 'screenshot',

    data() {
        return {
            canvas: null,
            context: null,
            video: null,
            // videoSrc: 'https://tbm-auth.alicdn.com/e99361edd833010b/v4E116euH9qiuAZlK1v/rQQluMwLeiFMX9kXHio_290315414979_hd_hq.mp4?auth_key=1608277219-0-0-743fa07c307824b541a1198be1fb074b',
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
