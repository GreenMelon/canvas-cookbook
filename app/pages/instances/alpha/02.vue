<template>
    <main>
        <p>
            文件：
            <input
                type="file"
                @change="changeFile"
            >
        </p>
        <p>
            颜色：
            <input
                v-model="color"
                type="color"
                @change="changeColor"
            >
            <span>{{ color }}</span>
        </p>
        <p>
            容差：
            <input
                v-model="range"
                type="number"
                min="0"
                max="100"
            >
        </p>
        <p>
            去色：
            <button @click="clear">
                clear
            </button>
        </p>

        <canvas id="canvas" />
        <canvas id="shadowCanvas" />
    </main>
</template>

<script>
// https://clippingmagic.com

const hexToRgb = (hex) => {
    const value = hex.replace('#', '').split('');
    const r = parseInt(`0x${value.slice(0, 2).join('')}`);
    const g = parseInt(`0x${value.slice(2, 4).join('')}`);
    const b = parseInt(`0x${value.slice(4, 6).join('')}`);
    return [r, g, b];
}

hexToRgb('#ffffff');

const isSimilar = (rgba, r, g, b, tolerance) => {
    return Math.sqrt(
        (r - rgba[0]) * (r - rgba[0]) + 
        (g - rgba[1]) * (g - rgba[1]) + 
        (b - rgba[2]) * (b - rgba[2])
    ) <= tolerance;
}

export default {
    alias: '图片去色',

    data() {
        return {
            color: '#ffffff',
            range: 20,
            context: null,
            shadowContext: null,
            imgData: [],
            shadowImgData: [],
        };
    },

    methods: {
        changeFile(evt) {
            const [file] = evt.target.files;
            const reader = new FileReader();
            const img = new Image();

            img.onload = () => {
                this.draw(img);
            };

            reader.onload = (e) => {
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        changeColor(evt) {
            this.color = evt.target.value;
        },

        draw(img) {
            this.render(img, canvas, 'context', 'imgData');
            this.render(img, shadowCanvas, 'shadowContext', 'shadowImgData');
        },

        render(img, canvas, ctx, data) {
            const { width, height } = img;
            const context = canvas.getContext('2d');
            this[ctx] = context;

            canvas.width = width;
            canvas.height = height;
            context.clearRect(0, 0, width, height);
            context.drawImage(img, 0, 0);

            this[data] = context.getImageData(0, 0, width, height);
        },

        clear() {
            const { imgData, shadowImgData, shadowContext } = this;

            for (let index = 0; index < imgData.data.length; index += 4) {
                let r = imgData.data[index];
                let g = imgData.data[index + 1];
                let b = imgData.data[index + 2];

                if (isSimilar(hexToRgb(this.color), r, g, b, this.range)) {
                    shadowImgData.data[index] = 0;
                    shadowImgData.data[index + 1] = 0;
                    shadowImgData.data[index + 2] = 0;
                    shadowImgData.data[index + 3] = 0;
                } else {
                    shadowImgData.data[index] = r;
                    shadowImgData.data[index + 1] = g;
                    shadowImgData.data[index + 2] = b;
                    shadowImgData.data[index + 3] = imgData.data[index + 3];
                }
            }

            shadowContext.putImageData(shadowImgData, 0, 0);
        },
    },
}
</script>
