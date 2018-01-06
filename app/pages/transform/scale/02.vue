<template>
    <main>
        <div>
            <button @click="scale" type="button">scale</button>
        </div>
        <canvas id="canvas" width="800" height="600" class="border-canvas"></canvas>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                context: null,
                ratio: 2,
            }
        },
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                this.context = canvas.getContext('2d');

                const { context } = this;

                context.strokeStyle = '#c7254e';
                context.strokeRect(10, 10, 40, 30);
            },
            scale() {
                const { context, ratio } = this;
                context.scale(ratio, ratio);

                context.strokeStyle = '#c7254e';
                context.strokeRect(10, 10, 40, 30);
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
