<template>
    <main>
        <canvas id="canvas"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                let canvas = document.getElementById('canvas');
                let context = canvas.getContext('2d');

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
