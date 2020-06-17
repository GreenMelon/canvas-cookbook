<template>
    <main>
        <div>
            <button @click="loading" type="button">loading</button>
        </div>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
// 渐变圆环
export default {
    data() {
        return {
            context: null,
            width: 0,
            height: 0,
            linearGrad: null,
        }
    },
    methods: {
        draw() {
            const canvas = document.getElementById('canvas');
            this.context = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;

            const { context } = this;

            const linearGrad = context.createLinearGradient(300, 0, 500, 0);
            this.linearGrad = linearGrad;
            linearGrad.addColorStop(0, 'red');
            linearGrad.addColorStop(0.16, 'orange');
            linearGrad.addColorStop(0.32, 'yellow');
            linearGrad.addColorStop(0.48, 'green');
            linearGrad.addColorStop(0.64, 'blue');
            linearGrad.addColorStop(0.80, 'indigo');
            linearGrad.addColorStop(1, 'violet');

            context.strokeStyle = linearGrad;
            context.lineWidth = 10;
            context.arc(400, 300, 100, 0, 360 * Math.PI / 180);
            context.stroke();
        },
        loading() {
            const { context, width, height, linearGrad } = this;
            const draw = (ctx, x) => {
                ctx.clearRect(0, 0, width, height);

                ctx.beginPath();
                ctx.lineCap = 'round';
                ctx.strokeStyle = linearGrad;
                if (x < 360 * Math.PI / 180) {
                    x += Math.PI / 100;
                } else {
                    x = 0;
                }

                ctx.arc(width / 2, height / 2, 100, 0, x, false);
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
    mounted() {
        this.draw();
    }
}
</script>
