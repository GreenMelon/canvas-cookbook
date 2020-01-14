<template>
    <main>
        <div>
            <button @click="rotate" type="button">rotate</button>
        </div>
        <canvas id="canvas" width="800" height="600" class="border-canvas"></canvas>
    </main>
</template>

<script>
    import { getRandomColor } from '@/utils/index';
    export default {
        data() {
            return {
                context: null,
                degree: -5,
            }
        },
        methods: {
            init() {
                const canvas = document.getElementById('canvas');
                this.context = canvas.getContext('2d');

                this.fillRect();
            },
            rotate() {
                const { context, degree } = this;
                // 整个坐标系旋转
                context.rotate(degree * Math.PI / 180);

                this.fillRect();
            },
            fillRect() {
                const { context, degree } = this;

                context.beginPath();
                context.arc(50, 550, 50, 0, 360 * Math.PI / 180);
                context.fillStyle = getRandomColor();
                context.fill();
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
