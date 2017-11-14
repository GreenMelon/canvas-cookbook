<template>
    <main>
        <video id="video" :src="src" controls width="400"></video>
        <button @click="draw">截图</button>
        <canvas id="canvas" width="400" height="300"></canvas>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                src: 'http://www.caiguazai.com/796795205.mp4',
                canvas: null,
                context: null,
                video: null
            }
        },
        methods: {
            init(src) {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');

                this.video = document.getElementById('video');
            },
            draw() {
                const video = this.video;
                this.context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
            }
        },
        mounted() {
            this.init();
        }
    };
</script>
