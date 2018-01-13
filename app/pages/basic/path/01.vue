<template>
    <main>
        <div>
            x: <input v-model="x" type="number">
            y: <input v-model="y" type="number">
            <button @click="check">isPointInPath</button>
        </div>
        <canvas id="canvas" width="400" height="300"></canvas>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                canvas: null,
                context: null,
                x: 0,
                y: 0,
            }
        },
        methods: {
            draw() {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');

                const { context } = this;
                context.rect(10, 10, 200, 150);
                context.strokeStyle = '#007dd4';
                context.stroke();
            },
            check() {
                const { x, y, context } = this;
                if (context.isPointInPath(x, y)) {
                    alert(`point: (${x}, ${y}) in path`);
                } else {
                    alert(`point: (${x}, ${y}) not in path`);
                }
            },
        },
        mounted() {
            this.draw();
        },
    };
</script>
