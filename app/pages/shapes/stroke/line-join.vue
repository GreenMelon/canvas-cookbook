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

                context.lineWidth = 20;

                const joinStyles = [
                    'miter',  //尖的
                    'bevel',  //平的
                    'round'   //圆的
                ];

                joinStyles.forEach((style, index) => {
                    context.lineJoin = style;
                    context.strokeRect(20 + index * 150, 20, 100, 100);
                });
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
