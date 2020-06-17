<style scoped>
    canvas {
        border: 1px dashed #000;
    }
</style>

<template>
    <main>
        <canvas id="canvas" width="1024" height="768"></canvas>
    </main>
</template>

<script>
const WINDOWWIDTH = 1024;
const WINDOWHEIGHT = 568;
const RADIUS = 8;
const MARGINTOP = 60;
const MARGINLEFT = 30;

let curShowSeconds = 0;
const deadTime = new Date();
deadTime.setTime(deadTime.getTime() + 3600 * 1000);

const balls = [];
const colors = [
    '#33B5E5',
    '#0099CC',
    '#AA66CC',
    '#9933CC',
    '#99CC00',
    '#669900',
    '#FFBB33',
    '#FF8800',
    '#FF4444',
    '#CC0000',
];

const digit = [
    // 0
    [   
        [0,0,1,1,1,0,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,0,1,1,0],
        [0,0,1,1,1,0,0]
    ],
    // 1
    [
        [0,0,0,1,1,0,0],
        [0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [1,1,1,1,1,1,1]
    ],
    // 2
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,1,1],
        [1,1,1,1,1,1,1]
    ],
    // 3
    [
        [1,1,1,1,1,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],
    // 4
    [
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,0],
        [0,0,1,1,1,1,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,1,1,0],
        [1,1,1,1,1,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,1]
    ],
    // 5
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,1,1,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],
    // 6
    [
        [0,0,0,0,1,1,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],
    // 7
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0]
    ],
    // 8
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],
    // 9
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,1,1,0,0,0,0]
    ],
    // :
    [
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
];

export default {
    data() {
        return {}
    },
    methods: {
        getShowSeconds() {
            const now = new Date();
            let timeGap = deadTime.getTime() - now.getTime();
            timeGap = Math.round(timeGap / 1000);

            return timeGap >= 0 ? timeGap : 0;
        },
        renderDigit(x, y, num, cxt) {
            cxt.fillStyle = '#c7254e';
            for (let i = 0; i < digit[num].length; i++) {
                for (let j = 0; j < digit[num][i].length; j++) {
                    if (digit[num][i][j] == 1) {
                        cxt.beginPath();
                        cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI);
                        cxt.fill();
                    }
                }
            }
        },
        render(cxt, seconds) {
            const { renderDigit } = this;
            cxt.clearRect(0, 0, WINDOWWIDTH, WINDOWHEIGHT);

            const hour = parseInt(seconds / 3600);
            const minute = parseInt((seconds - hour * 3600) / 60);
            const second = seconds % 60;

            renderDigit(MARGINLEFT, MARGINTOP, parseInt(hour/10), cxt);
            renderDigit(MARGINLEFT + 15 * (RADIUS + 1), MARGINTOP, parseInt(hour % 10), cxt);
            renderDigit(MARGINLEFT + 30 * (RADIUS + 1), MARGINTOP, 10, cxt);
            renderDigit(MARGINLEFT + 39 * (RADIUS + 1), MARGINTOP, parseInt(minute / 10), cxt);
            renderDigit(MARGINLEFT + 54 * (RADIUS + 1), MARGINTOP, parseInt(minute % 10), cxt);
            renderDigit(MARGINLEFT + 69 * (RADIUS + 1), MARGINTOP, 10, cxt);
            renderDigit(MARGINLEFT + 78 * (RADIUS + 1), MARGINTOP, parseInt(second / 10), cxt);
            renderDigit(MARGINLEFT + 93 * (RADIUS + 1), MARGINTOP, parseInt(second % 10), cxt);

            for (let i = 0; i < balls.length; i++) {
                cxt.fillStyle = balls[i].color;
                cxt.beginPath();
                cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true);
                cxt.closePath();
                cxt.fill();
            }
        },
        ballDrops() {
            for (let i = 0; i < balls.length; i++) {

                balls[i].x += balls[i].vx;
                balls[i].y += balls[i].vy;
                balls[i].vy += balls[i].g;

                if (balls[i].y >= WINDOWHEIGHT - RADIUS) {
                    balls[i].y = WINDOWHEIGHT - RADIUS;
                    balls[i].vy = -balls[i].vy * 0.75;
                }
            }
        },
        addBall(x, y, num) {
            for (let i = 0; i < digit[num].length; i++) {
                for (let j = 0; j < digit[num][i].length; j++) {
                    if (digit[num][i][j] === 1) {

                        const aBall = {
                            x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                            y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                            g: 1.5 + Math.random(),
                            vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                            vy: -5,
                            color: colors[Math.floor(Math.random() * colors.length)],
                        };

                        balls.push(aBall);
                    }
                }
            }
        },
        update() {
            const { addBall, ballDrops } = this;
            const nextShowSeconds = this.getShowSeconds();

            const nextHour = parseInt(nextShowSeconds / 3600);
            const nextMinute = parseInt((nextShowSeconds - nextHour * 3600) / 60);
            const nextSecond = nextShowSeconds % 60;

            const curHour = parseInt(curShowSeconds / 3600);
            const curMinute = parseInt((curShowSeconds - curHour * 3600) / 60);
            const curSecond = curShowSeconds % 60;

            if (nextSecond != curSecond) {

                if (parseInt(curHour/10) != parseInt(nextHour/10)) {
                    addBall(MARGINLEFT + 0, MARGINTOP, parseInt(curHour/10));
                }

                if(parseInt(curHour%10) != parseInt(nextHour%10)) {
                    addBall(MARGINLEFT + 15*(RADIUS+1), MARGINTOP, parseInt(curHour/10));
                }

                if( parseInt(curMinute/10) != parseInt(nextMinute/10)) {
                    addBall(MARGINLEFT + 39*(RADIUS+1), MARGINTOP, parseInt(curMinute/10));
                }
                if( parseInt(curMinute%10) != parseInt(nextMinute%10)) {
                    addBall(MARGINLEFT + 54*(RADIUS+1), MARGINTOP, parseInt(curMinute%10));
                }

                if(parseInt(curSecond/10) != parseInt(nextSecond/10)) {
                    addBall(MARGINLEFT + 78*(RADIUS+1), MARGINTOP, parseInt(curSecond/10));
                }
                if(parseInt(curSecond%10) != parseInt(nextSecond%10)) {
                    addBall(MARGINLEFT + 93*(RADIUS+1), MARGINTOP, parseInt(nextSecond%10));
                }

                curShowSeconds = nextShowSeconds;
            }

            ballDrops();
        },
        init() {
            const { render, update } = this;
            const canvas = document.getElementById('canvas');
            canvas.width = WINDOWWIDTH;
            canvas.height = WINDOWHEIGHT;
            const context = canvas.getContext('2d');

            curShowSeconds = this.getShowSeconds();

            setInterval(function() {
                render(context, curShowSeconds);
                update();
            }, 50);
        },
    },
    mounted() {
        this.init();
    },
}
</script>
