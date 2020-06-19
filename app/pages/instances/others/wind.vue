<template>
    <main>
        <canvas id="canvas"></canvas>
    </main>
</template>

<script>
export default {
    data() {
        return {
            width: 1000,
            height: 500,
        };
    },

    mounted() {
        this.init();
    },

    methods: {
        init() {
            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');

            let w = canvas.width = canvas.parentNode.offsetWidth;
            let h = canvas.height = canvas.parentNode.offsetHeight;

            function draw(a, b, t) {
                context.lineWidth = 0.8;
                context.fillStyle = 'white';
                context.fillRect(0, 0, w, h);
                for (let i = -60; i < 60; i += 1) {
                    context.strokeStyle = 'hsla(277, 95%, 15%, .15)';
                    context.beginPath();
                    context.moveTo(0, h / 2);
                    for (let j = 0; j < w; j += 10) {
                        context.lineTo(
                            10 * Math.sin(i / 10) + j + 0.008 * j * j,
                            Math.floor(h / 2 + j / 2 * Math.sin(j / 50 - t / 50 - i / 118) + (i * 0.9) * Math.sin(j / 25 - (i + t) / 65))
                        );
                    };
                    context.stroke();
                }
            }

            let t = 0;

            function run() {
                window.requestAnimationFrame(run);
                t += 1;
                draw(33, 52 * Math.sin(t / 2400), t);
            }

            run();

            window.addEventListener('resize', () => {
                w = canvas.width = canvas.parentNode.offsetWidth;
                h = canvas.height = canvas.parentNode.offsetHeight;
                context.fillStyle = 'hsla(277, 95%, 55%, 1)';
            }, false);
        },
    },
}
</script>
