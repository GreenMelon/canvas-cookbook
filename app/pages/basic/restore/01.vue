<template>
    <main>
        <canvas id="canvas" width="80" height="60"></canvas>
        <div>
            <button @click="save" type="button">记录当前状态并绘制下一个状态</button>
            <button @click="restore" type="button">恢复上一个状态并绘制</button>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                canvas: null,
                context: null,
                index: 0,
                colors: ['red', 'green', 'blue'],
            }
        },
        methods: {
            init(src) {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');

                this.draw(this.index);
            },
            draw(index) {
                this.index = index;
                this.context.fillStyle = this.colors[index];
                this.context.fillRect(0, 0, 80, 60);
            },
            save() {
                this.context.save();
                this.draw((this.index+1) % this.colors.length);
            },
            restore() {
                this.context.restore();
                this.draw(Math.max(0, this.index-1));
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
