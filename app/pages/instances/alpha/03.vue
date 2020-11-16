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
            width="200"
            height="200"
            @click="getImageData"
        />

        <div
            :style="style"
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
            color: '',
        };
    },

    computed: {
        style() {
            return {
                width: '50px',
                height: '50px',
                backgroundColor: `${this.color}`,
            }
        },
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

        getImageData(evt) {
            const { top, left } = this.canvas.getBoundingClientRect();
            const { clientX, clientY } = evt;
            const x = clientX - left;
            const y = clientY - top;
            const imageData = this.context.getImageData(x, y, 1, 1).data.slice(0, 3);
            this.color = imageData.reduce((color, channel) => {
                const hex = channel.toString(16).padStart(2, '0');
                return `${color}${hex}`;
            }, '#');

            console.log(1, this.color);
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
