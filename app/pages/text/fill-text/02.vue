<style scoped>
    img {
        display: none;
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
            return {}
        },
        methods: {
            draw(src) {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                const text = 'Canvas';
                context.font = '150px sans-serif';

                const img = document.getElementById('img');
                const pattern = context.createPattern(img, 'repeat');

                context.fillStyle = pattern;
                context.fillText(text, 10, 200);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
