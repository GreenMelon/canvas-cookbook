<style scoped>
    img {
        width: 100px;
        height: auto;
    }
</style>

<template>
    <main>
        <div>
            <img src="~images/superman.jpg" id="img" alt="">
            <button @click="draw" type="button">draw</button>
        </div>

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
            draw(src) {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');

                const img = document.getElementById('img');
                this.context.drawImage(img, 0, 0, 200, 200);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
