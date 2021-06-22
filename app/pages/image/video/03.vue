<template>
    <main>
        <canvas
            width="600"
            height="600"
        />
        <div id="video-container">
            <video
                width="300"
                height="300"
                controls="true"
                autoplay="true"
                muted
                id="video"
           />
        </div>
    </main>
</template>

<script>
export default {
    alias: '将 Canvas 绘制过程转为视频',

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
        this.animate(0);

        this.record();
    },

    methods: {
        init() {
            this.canvas = document.querySelector('canvas');
            this.context = this.canvas.getContext('2d');
        },

        draw(rotation) {
            const {
                canvas: { width, height },
                context: ctx,
            } = this;

            ctx.fillStyle = 'red';
            ctx.clearRect(0, 0, width, height);
            ctx.save();
            ctx.translate(width / 2, height / 2);
            ctx.rotate(rotation);
            ctx.translate(-width / 2, -height / 2);
            ctx.beginPath();
            ctx.rect(200, 200, 200, 200);
            ctx.fill();
            ctx.restore();
        },

        animate(t) {
            this.draw(t / 500);
            requestAnimationFrame(this.animate);
        },

        record() {
            const stream = this.canvas.captureStream();
            const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

            const data = [];
            recorder.ondataavailable = function (event) {
                if (event.data && event.data.size) {
                    data.push(event.data);
                }
            };

            recorder.onstop = () => {
                const url = URL.createObjectURL(new Blob(data, { type: 'video/webm' }));
                document.querySelector('video').src = url;
            };

            recorder.start();

            setTimeout(() => {
                recorder.stop();
            }, 6000);
        },
    },
};
</script>
