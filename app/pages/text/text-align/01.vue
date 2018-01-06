<template>
    <main>
        <canvas id="canvas" width="800" height="600" class="border-canvas"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                // 中轴线
                context.strokeStyle = '#c7254e';
                context.moveTo(400, 50);
                context.lineTo(400, 550);
                context.setLineDash([1, 1]);
                context.stroke();

                context.font = '30px sans-serif';

                context.textAlign = 'start';
                context.fillText('textAlign: start', 400, 50);

                context.textAlign = 'left';
                context.fillText('textAlign: left', 400, 100);

                context.textAlign = 'center';
                context.fillText('textAlign: center', 400, 150);

                context.textAlign = 'end';
                context.fillText('textAlign: end', 400, 200);

                context.textAlign = 'right';
                context.fillText('textAlign: right', 400, 250);
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
