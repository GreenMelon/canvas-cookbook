<template>
    <main>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
export default {
    methods: {
        draw() {
            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');

            context.lineWidth = 12;

            const capStyles = [
                'butt',   //默认,无
                'round',  //圆的
                'square'  //平的
            ];

            const joinStyles = [
                'miter',  //尖的
                'bevel',  //平的
                'round'   //圆的
            ];

            capStyles.forEach((capStyle, i) => {
                joinStyles.forEach((joinStyle, j) => {
                    context.beginPath();

                    context.moveTo(10 + j * 180, 10 + i * 180);
                    context.lineTo((10 + j * 180) + 100, 10 + i * 180);
                    context.lineTo(10 + j * 180, (10 + i * 180) + 100);
                    context.lineTo((10 + j * 180) + 100, (10 + i * 180) + 100);

                    context.lineCap = capStyle;
                    context.lineJoin = joinStyle;
                    context.stroke();
                });
            });
        },
    },
    mounted() {
        this.draw();
    }
}
</script>
