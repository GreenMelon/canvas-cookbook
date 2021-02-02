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
// 文档: https://html2canvas.hertzen.com/configuration
import Html2canvas from 'html2canvas';

export default {
    data() {
        return {
            zoom: 0.5,
        }
    },

    mounted() {
        setTimeout(this.draw, 2000);
    },

    methods: {
        draw() {
            const editor = document.getElementById('editor');
            const shot = document.getElementById('shot');

            const { offsetWidth, offsetHeight } = editor;

            Html2canvas(editor, {
                width: offsetWidth,
                height: offsetHeight,
                useCORS: true,
                onclone: (document) => {
                    // eg. hide some elements
                },
            })
            .then(canvas => {
                const imageData = canvas.toDataURL('image/png');
                const img = new Image();
                img.src = imageData;
                shot.appendChild(img);
            });
        },
    },
};
</script>

<style scoped>
main {
    display: flex;
}
#editor {
    width: 500px;
}
</style>
