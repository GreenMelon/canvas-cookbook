<style scoped>
</style>

<template>
    <main>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                video: null,
                canvas: null,
                context: null,
            }
        },

        mounted() {
            this.playVideo();
        },

        methods: {
            playVideo() {
                let video;
                if (!this.video) {
                    video = this.video = document.createElement('video');
                    video.src = 'http://ssl.cdn.turner.com/nba/big/video/2020/03/03/dca777ca-ee2b-4c7c-b73f-d96907ecedd7.nba_3117627_1920x1080_5904.mp4';
                    video.loop = true;
                    video.muted = true;
                    video.addEventListener('playing', this.paintVideo);
                    video.play();
                }
            },

            paintVideo() {
                const { video } = this;
                if (!this.canvas) {
                    this.canvas = document.createElement('canvas');
                    this.canvas.width = video.videoWidth;
                    this.canvas.height = video.videoHeight;
                    this.$el.appendChild(this.canvas);
                }

                this.canvas.getContext('2d').drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
                if (!video.paused) {
                    requestAnimationFrame(this.paintVideo);
                }
            },
        },
    };
</script>
