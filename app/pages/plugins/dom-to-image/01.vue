<template>
    <main>
        <div id="editor">
            <h1>文字</h1>
            <img
                src="https://st-gdx.dancf.com/gaodingx/368/design/20190715-104036-8e38.png"
                :style="{
                    transform: `scale(${zoom})`,
                    transformOrigin: '0 0',
                }"
            >
        </div>

        <div id="shot"></div>
    </main>
</template>

<script>
import DomToImage from 'dom-to-image';

export default {
    data() {
        return {
            zoom: 0.5,
        };
    },

    mounted() {
        setTimeout(this.draw, 2000);
    },

    methods: {
        draw() {
            const editor = document.getElementById('editor');
            const shot = document.getElementById('shot');

            const { offsetWidth, offsetHeight } = editor;
            const scale = 2;
            const option = {
                width: offsetWidth * scale,
                height: offsetHeight * scale,
                style: {
                    // transform: `scale(${scale}) translate(${offsetWidth / 2 / scale}px, ${offsetHeight / 2 / scale}px)`,
                    transform: `scale(${scale})`,
                    transformOrigin: '0 0',
                },
            };

            DomToImage.toPng(editor, option)
                .then((dataUrl) => {
                    const img = new Image();
                    img.src = dataUrl;
                    img.width = offsetWidth;
                    shot.appendChild(img);
                })
                .catch((error) => {
                    console.error('oops, something went wrong!', error);
                });
        },
    },
}
</script>

<style scoped>
main {
    display: flex;
}
#editor {
    width: 500px;
}
</style>
