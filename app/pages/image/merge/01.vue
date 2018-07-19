<style scoped>
    .container {
        height: 100px;
        overflow: hidden;
    }
    canvas {
        z-index: -1;
        opacity: 0;
    }
    img {
        width: 300px;
        height: auto;
    }
</style>

<template>
    <main>
        <div class="container">
            <canvas id="canvas" height="3000" width="790"></canvas>
        </div>

        <ul>
            <li
                v-for="(src, index) in exportedImages"
                :key="index"
            >
                <img :src="src" alt="">
            </li>
        </ul>
    </main>
</template>

<script>
    /**
     * Step
     * url => { width, height, url }
     * remain index
     * calc height (best pratice)
     * 
     * drawImage
     * exportImage
     * saveImage
     */
    import Promise from 'bluebird';
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
                exportedImages: [],
                maxHeight: 1546,
            }
        },
        methods: {
            initCanvas() {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');
            },
            loadImages(images) {
                const newImages = images.map(image => {
                    return Object.assign(image, {
                        url: `http://st-cjxq.dancf.com/20180717/makeshot_${image.shot}.jpg?x-oss-process=image/resize,w_790/sharpen,95`,
                    });
                });

                const loadEvents = newImages.map(image => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.setAttribute('crossOrigin', 'anonymous');
                        img.src = image.url;
                        console.log(img.src);
                        img.onload = () => {
                            resolve(img);
                        }
                    });
                });

                Promise.all(loadEvents).then(res => {
                    this.drawImages(res);
                });
            },
            drawImages(images) {
                const { canvas, context } = this;
                const groups = this.groupImages(images, this.maxHeight);

                groups.forEach(group => {
                    canvas.height = group.height;
                    canvas.width = group.images[0].width;
                    context.clearRect(0, 0, canvas.width, canvas.height);

                    let top = 0;
                    group.images.forEach(image => {
                        context.drawImage(image, 0, top);
                        top += image.height;
                    });
                    this.exportImage();
                });

                console.log(this.exportedImages);
            },
            groupImages(images, limit) {
                return images.reduce((groups, image) => {
                    if (!groups.length) {
                        groups.push({
                            images: [],
                            height: 0,
                        });
                    }
                    const group = groups[groups.length - 1]

                    if (group.height + image.height > limit) {
                        groups.push({
                            images: [image],
                            height: image.height,
                        });
                    } else {
                        group.images.push(image);
                        group.height += image.height;
                    }

                    return groups;
                }, []);
            },
            exportImage() {
                let url = canvas.toDataURL('image/png');
                this.exportedImages.push(url);
            },
            saveImages() {},
        },
        mounted() {
            this.initCanvas();
            this.loadImages(this.images);
        },
    };
</script>
