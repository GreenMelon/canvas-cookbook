<template>
    <main>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                canvas: null,
                context: null,
            }
        },
        methods: {
            init(src) {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');

                let img = new Image();
                img.src = src;
                img.onload = () => {
                    this.draw(img);
                }
            },
            draw(img) {
                this.canvas.height = img.height;
                this.canvas.width = img.width;
                this.context.drawImage(img, 0, 0);
            },
        },
        mounted() {
            this.init('http://ox2ualtw3.bkt.clouddn.com/halloween.png');
        },
    };
</script>
