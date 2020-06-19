<style scoped>
    img {
        display: none;
    }
</style>

<template>
    <main>
        <div>
            <button @click="draw" type="button">draw</button>
            <button @click="loading" type="button">loading</button>
            <img id="icon" src="~images/conic.png" alt="" width="400">
        </div>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
export default {
    alias: '非对称的渐变圆环',

    data() {
        return {
            context: null,
        }
    },

    mounted() {
        this.draw();
    },

    methods: {
        draw() {
            const canvas = document.getElementById('canvas');
            this.context = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;

            const { context } = this;

            const img = document.getElementById('icon');
            const pattern = context.createPattern(img, 'no-repeat');
            context.strokeStyle = pattern;
            context.lineWidth = 15;
            context.arc(150, 150, 100, 0, 360 * Math.PI / 180);
            context.stroke();
        },
        loading() {
            const { context } = this;
            const draw = (ctx, x) => {
                ctx.clearRect(0, 0, 800, 600);

                ctx.beginPath();
                ctx.lineCap = 'round';
                if (x < 360 * Math.PI / 180) {
                    x += Math.PI / 100;
                } else {
                    x = 0;
                }

                ctx.arc(150, 150, 100, 0, x, false);
                ctx.stroke();

                requestAnimationFrame(function () {
                    draw(ctx, x);
                });
            }

            requestAnimationFrame(function () {
                draw(context, 0);
            });
        },
    },
}
</script>
