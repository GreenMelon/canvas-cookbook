<template>
    <main>
        <div>
            <img
                src="~images/superman.jpg"
                id="img"
                alt=""
            >
            <button
                type="button"
                @click="draw"
            >
                draw
            </button>
        </div>

        <canvas
            id="canvas"
            width="800"
            height="600"
        />
    </main>
</template>

<script>
export default {
    alias: '取色',

    data() {
        return {
            canvas: null,
            context: null,
        }
    },

    mounted() {
        this.draw();
    },

    methods: {
        draw() {
            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext('2d');

            const img = document.getElementById('img');
            this.context.drawImage(img, 0, 0, 200, 200);
        },
    },
};
</script>

<style scoped>
img {
    width: 100px;
    height: auto;
}
</style>
