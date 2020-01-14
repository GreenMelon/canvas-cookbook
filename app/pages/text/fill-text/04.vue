<template>
    <main>
        <button @click="exportImage">
            export
        </button>

        <canvas id="canvas"></canvas>

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
import { getPixelRatio } from '@/utils/index';

export default {
    data() {
        return {
            canvas: null,
            width: 600,
            height: 200,
            content: 'Caigua 菜瓜',
            fontSize: 50,
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

            const ratio = getPixelRatio(context);
            const {
                width,
                height,
                content,
                fontSize,
                fontFamily,
            } = this;

            canvas.width = ratio * width;
            canvas.height = ratio * height;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            // resize
            context.scale(ratio, ratio);

            context.fillStyle = '#fff';
            context.fillRect(0, 0, ratio * width, ratio * height);

            context.fillStyle = '#000';
            context.font = `${fontSize}px ${fontFamily}`;
            context.fillText(content, 10, 50 * ratio);

            this.canvas = canvas;
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
