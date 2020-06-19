<style scoped>
    canvas {
        border: 1px dashed #000;
    }
</style>

<template>
    <main>
        <canvas id="canvas" width="400" height="300"></canvas>
        <div>
            鼠标当前坐标为：( {{ x }}, {{ y }} )
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            x: 0,
            y: 0,
        }
    },

    mounted() {
        this.init();
    },

    methods: {
        init() {
            const canvas = document.getElementById('canvas');

            canvas.addEventListener('mousemove', ev => {
                const element = ev.target;

                this.x = ev.pageX - element.offsetLeft;
                this.y = ev.pageY - element.offsetTop;
            });
        }
    },
}
</script>
