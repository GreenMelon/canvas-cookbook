<template>
    <main>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
    export default {
        methods: {
            draw() {
                let canvas = document.getElementById('canvas');
                let context = canvas.getContext('2d');

                // context.arc(
                //     centerX,       // 圆心x坐标
                //     centerY,       // 圆心y坐标
                //     radius,        // 半径
                //     starAngle,     // 开始的角度
                //     endAngle,      // 结束的角度
                //     anticlockwise  // 默认为false,顺时针
                // );

                context.arc(100, 100, 50, 0, 2*Math.PI);

                context.lineWidth = 2;
                context.strokeStyle = '#c7254e';
                context.stroke();
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
