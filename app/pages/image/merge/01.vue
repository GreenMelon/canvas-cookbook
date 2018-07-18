<style>
    .container {
        height: 100px;
        overflow: hidden;
    }
    canvas {
        z-index: -1;
        opacity: 0;
    }
</style>

<template>
    <main>
        <div class="container">
            <canvas id="canvas" height="3000"></canvas>
        </div>
        
        <img :src="exportedImageUrl">
        <button @click="exportImage" type="button">export</button>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                canvas: null,
                context: null,
                images: [
                    {
                        shot: '20180717104955_69155_254244_184958_4075',
                        height: 1174,
                        top: 0,
                    }, {
                        shot: '20180717104955_c1a57_254275_184958_5152',
                        height: 380,
                        top: 1174,
                    }, {
                        shot: '20180717104958_3a915_254108_185007_8071',
                        height: 1127,
                        top: 1554,
                    }
                ],
                exportedImageUrl: '',
            }
        },
        methods: {
            init() {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');
            },
            drawImages(images) {
                const { canvas, context } = this;
                images = images.map(image => {
                    return Object.assign(image, {
                        url: `http://st-cjxq.dancf.com/20180717/makeshot_${image.shot}.jpg?x-oss-process=image/resize,w_790/sharpen,95`,
                    });
                });

                images.forEach(image => {
                    const img = new Image();
                    img.setAttribute('crossOrigin', 'anonymous');
                    img.src = image.url;
                    img.onload = () => {
                        canvas.width = img.width;
                        context.drawImage(img, 0, image.top);
                    }
                });
            },
            exportImage() {
                this.exportedImageUrl = this.canvas.toDataURL('image/png');
            },
        },
        mounted() {
            this.init();
            this.drawImages(this.images);
        },
    };
</script>
