<style scoped>
    .wrapper {
        overflow: hidden;
    }
</style>

<template>
    <main>
        <div class="wrapper">
            <canvas
                v-for="item in operations"
                :id="item"
                width="220"
                height="220"
            ></canvas>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                operations: [
                    'source-over', 'source-atop', 'source-in', 'source-out',
                    'destination-over', 'destination-atop', 'destination-in', 'destination-out',
                    'lighter', 'copy', 'xor'
                ],
            }
        },
        methods: {
            draw() {
                this.operations.forEach(item => {
                    const canvas = document.getElementById(item);
                    const context = canvas.getContext('2d');

                    context.font = '20px sans-serif';
                    context.fillStyle = '#000';
                    context.fillText(item, 0, 20);

                    context.arc(100, 130, 50, 0, 360 * Math.PI / 180);
                    context.fillStyle = '#c7254e';
                    context.fill();

                    context.globalCompositeOperation = item;

                    context.beginPath();
                    context.fillStyle = '#007dd4';
                    context.fillRect(0, 30, 100, 100);
                });
            },
        },
        mounted() {
            this.draw();
        },
    }
</script>
