<template>
    <main>
        <input
            type="file"
            accept="image/*"
            @change="change"
        >
        <p>存在透明区域：{{ hasAlpha }}</p>

        <canvas id="canvas" />
    </main>
</template>

<script>
export default {
    alias: '检测图片是否存在透明区域',

    data() {
        return {
            hasAlpha: false,
        };
    },

    methods: {
        change(evt) {
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

        draw(img) {
            const { width, height } = img;
            const context = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;
            context.clearRect(0, 0, width, height);
            context.drawImage(img, 0, 0);

            // 获取图片像素信息
            const { data } = context.getImageData(0, 0, width, height);
            this.hasAlpha = false;
            for (let index = 3; index < data.length; index += 4) {
                if (data[index] != 255) {
                    this.hasAlpha = true;
                    break;
                }
            }
        },
    },
}
</script>
