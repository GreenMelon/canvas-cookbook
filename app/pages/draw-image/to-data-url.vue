<template>
    <main>
        <canvas id="canvas" width="80" height="60"></canvas>
        <img v-for="img in images" :src="img">
        <button @click="exportImg" type="button">export</button>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                canvas: null,
                context: null,
                images: []
            }
        },
        methods: {
            draw() {
                this.canvas = document.getElementById('canvas');
                const context = this.context = this.canvas.getContext('2d');

                context.moveTo(40, 60);
                context.lineTo(40, 0);
                context.lineTo(30, 20);
                context.lineTo(50, 20);
                context.lineTo(40, 0);

                context.strokeStyle = 'crimson';
                context.stroke();
            },
            exportImg() {
                let url = this.canvas.toDataURL('image/png');
                this.images.push(url);
            }
        },
        mounted() {
            this.draw();
        }
    };
</script>
