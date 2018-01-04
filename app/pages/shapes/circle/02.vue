<template>
    <main>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                target: [
                    ['purple', 'yellow'],
                    ['pink', 'white'],
                    ['green', 'black'],
                    ['red', 'white', 'orange', 'white'],
                    ['purple', 'yellow', 'blue']
                ]
            }
        },
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                let ctx = canvas.getContext('2d');

                let { centerX, centerY, radius, pieces, step } = {
                    centerX: canvas.width / 2,
                    centerY: canvas.height / 2,
                    radius: 150,
                    pieces: 12,
                    step: 30,
                };

                const radUnit = 2 * Math.PI / pieces;

                this.target.reverse().forEach((group, groupIndex) => {
                    let starAngle = 0;
                    let endAngle = radUnit;
                    let len = group.length;
                    let r = radius - groupIndex * step;

                    for (let i = 0; i < pieces; i++) {
                        const startPoint = this.getPosition(r, starAngle);
                        let j = i >= len ? i % len : i;

                        ctx.beginPath();

                        ctx.moveTo(centerX, centerY);
                        ctx.lineTo(centerX + startPoint.x, centerY + startPoint.y);
                        ctx.arc(centerX, centerY, r, starAngle, endAngle);

                        ctx.closePath();

                        ctx.fillStyle = group[j];
                        ctx.fill();

                        starAngle = endAngle;
                        endAngle += radUnit;
                    }
                });
            },
            getPosition(radius = 10, angle = 0) {
                return {
                    x: radius * Math.cos(angle),
                    y: radius * Math.sin(angle),
                }
            },
        },
        mounted() {
            this.draw();
        }
    }
</script>
