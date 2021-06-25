<template>
    <main>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="82" viewBox="0 0 100 82">
            <foreignObject width="100" height="82">
                <body xmlns="http://www.w3.org/1999/xhtml" style="padding: 0;">
                    <img
                        src="https://gd-filems.dancf.com/mcm79j/mcm79j/08978/14e588e9-d9f7-4891-84cc-8d07d05445da105324.png"
                        width="100"
                        alt="">
                    <p>xxx</p>
                </body>
            </foreignObject>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="82" viewBox="0 0 100 82">
            <image
                href="https://gd-filems.dancf.com/mcm79j/mcm79j/08978/14e588e9-d9f7-4891-84cc-8d07d05445da105324.png"
                width="100"
            />
        </svg>
        <br>

        <canvas
            id="canvas"
            width="800"
            height="600"
        />
    </main>
</template>

<script>
export default {
    alias: '绘制带有外部图片的 SVG',

    data() {
        return {
            canvas: null,
            context: null,
        }
    },

    mounted() {
        this.draw('https://gd-filems.dancf.com/mcm79j/mcm79j/08978/14e588e9-d9f7-4891-84cc-8d07d05445da105324.png');
        // this.draw('https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/1624599368352499/melon.png');
    },

    methods: {
        async draw(url) {
            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext('2d');

            const imageUrl = await this.getBase64FromUrl(url);
            const outerHTML =
            `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="82" viewBox="0 0 100 82"><image href="${imageUrl}" width="100" /></svg>`;
            const svgBase64 = `data:image/svg+xml;base64,${window.btoa(outerHTML)}`;
            const image = await this.loadImage(svgBase64);
            this.context.drawImage(image, 0, 0);
        },

        async getBase64FromUrl(url) {
            const data = await fetch(url);
            const blob = await data.blob();
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob); 
                reader.onloadend = () => {
                    resolve(reader.result);
                }
            });
        },

        loadImage(url) {
            return new Promise((resolve) => {
                const image = new Image();
                image.crossOrigin = 'anonymous';
                image.onload = () => {
                    resolve(image);
                };
                image.src = url;
            });
        },
    },
};
</script>
