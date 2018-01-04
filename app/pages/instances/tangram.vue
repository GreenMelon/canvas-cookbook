<template>
    <main>
        <canvas id="canvas" width="800" height="600"></canvas>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                tangram: [
                    {
                        color: 'red',
                        points: [
                            {x: 0, y: 0},
                            {x: 400, y: 0},
                            {x: 200, y: 200}
                        ]
                    },{
                        color: 'orange',
                        points: [
                            {x: 0, y: 0},
                            {x: 200, y: 200},
                            {x: 0, y: 400}
                        ]
                    },{
                        color: 'yellow',
                        points: [
                            {x: 400, y: 0},
                            {x: 400, y: 200},
                            {x: 300, y: 300},
                            {x: 300, y: 100}
                        ]
                    },{
                        color: 'green',
                        points: [
                            {x: 300, y: 100},
                            {x: 300, y: 300},
                            {x: 200, y: 200}
                        ]
                    },{
                        color: 'blue',
                        points: [
                            {x: 200, y: 200},
                            {x: 300, y: 300},
                            {x: 200, y: 400},
                            {x: 100, y: 300}
                        ]
                    },{
                        color: 'indigo',
                        points: [
                            {x: 100, y: 300},
                            {x: 200, y: 400},
                            {x: 0, y: 400}
                        ]
                    },{
                        color: 'violet',
                        points: [
                            {x: 400, y: 200},
                            {x: 400, y: 400},
                            {x: 200, y: 400}
                        ]
                    }
                ]
            }
        },
        methods: {
            draw() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');

                this.drawTangram(context);
            },
            drawTangram(context) {
                this.tangram.forEach(piece => {
                    context.beginPath();

                    piece.points.forEach((point, index) => {
                        if (index === 0) {
                            context.moveTo(point.x, point.y);
                        }
                        else {
                            context.lineTo(point.x, point.y);
                        }
                    });

                    context.closePath();

                    context.fillStyle = piece.color;
                    context.fill();
                });
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>
