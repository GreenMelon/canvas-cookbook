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

                // 基线
                context.strokeStyle = '#c7254e';
                context.moveTo(0, 100);
                context.lineTo(600, 100);
                context.setLineDash([1, 1]);
                context.stroke();

                context.font = '20px sans-serif';

                context.textBaseline = 'alphabetic';
                context.fillText('alphabetic', 10, 100);

                context.textBaseline = 'top';
                context.fillText('top', 180, 100);

                context.textBaseline = 'middle';
                context.fillText('middle', 250, 100);

                context.textBaseline = 'bottom';
                context.fillText('bottom', 350, 100);
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
