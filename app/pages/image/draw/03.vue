<style scoped>
    img {
        width: 300px;
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
                // source, destination
                this.context.drawImage(img, 130, 20, 200, 400, 0, 0, 300, 600);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
