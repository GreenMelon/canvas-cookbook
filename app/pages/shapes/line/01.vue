<template>
    <main>
        <canvas id="canvas"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                context.moveTo(0, 0);      //起点
                context.lineTo(100, 100);  //终点

                context.stroke();
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
