<template>
    <main>
        <canvas id="canvas" width="250" height="150"></canvas>
        <img id="img" src="~assets/icon-smile.png">
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                let pattern = context.createPattern(img, 'repeat');
                context.fillStyle = pattern;
                context.fillRect(0, 0, 200, 200);

                // 图案复制的是img的当前状态,因此即使使用JS和DOM修改了img元素的src属性值,图案也不会发生变化
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
