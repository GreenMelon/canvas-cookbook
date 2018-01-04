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

                const styles = [
                    [5, 5],
                    [20, 5],
                    [10, 5, 5, 5],
                    [1, 1]
                ];

                styles.forEach((style, index) => {
                    context.beginPath();

                    context.moveTo(100, 100 + index * 50);
                    context.lineTo(500, 100 + index * 50);

                    context.setLineDash(style);
                    context.lineWidth = 2;
                    context.stroke();
                });
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
