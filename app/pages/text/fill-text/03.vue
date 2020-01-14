<template>
    <main>
        <button @click="exportImage">
            export
        </button>

        <canvas
            id="canvas"
            :width="zoom * width"
            :height="zoom * height"
        />

        <h1
            :style="{
                font: `${fontSize}px ${fontFamily}`,
            }"
        >
            {{ content }}
        </h1>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                canvas: null,
                width: 400,
                height: 200,
                zoom: 2,
                content: 'Can',
                fontSize: 200,
                fontFamily: 'sans-serif',
            };
        },

        mounted() {
            this.draw();
        },

        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');
                this.canvas = canvas;

                const {
                    width,
                    height,
                    zoom,
                    content,
                    fontSize,
                    fontFamily,
                } = this;

                context.fillStyle = '#fff';
                context.fillRect(0, 0, zoom * width, zoom * height);

                context.fillStyle = '#000';
                context.font = `${zoom * fontSize}px ${fontFamily}`;
                context.fillText(content, 10, 150 * zoom);
            },

            exportImage() {
                let url = this.canvas.toDataURL('image/png');
                this.loadImage(url);
            },

            loadImage(url) {
                const { width, height } = this;
                const img = document.createElement('img');
                img.src = url;
                img.onload = () => {
                    this.$el.appendChild(img);
                    img.style.width = `${width}px`;
                    img.style.height = `${height}px`;
                };
            },
        },
    }
</script>
