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
    data() {
        return {
            canvas: null,
            context: null,
            video: null,
            videoSrc: 'http://ugcws.video.gtimg.com/uwMROfz2r5zEIaQXGdGnC2dfDmafRkP9ujxgqKjuATzMrE-2/e30308fywdg.mp4?vkey=A9B8D5650EC8A2E2744878B934B4E062D01E17D532FF3C16C9BD20CF32C5B45730A57149117174D77313BE62401287B77483EF9022F9040D6E3693EDF41A3EC2528F2F91D1A98793F42F0BF85F1C9C75160962CAC728F97723436CB6E0380BDFC57688069684061686DB315B039DA8BC5F7D4AC9C4B81713DC20F0C3D32BB8EC&br=101&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=70552d96bcd5307649086b35d1536d24',
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
