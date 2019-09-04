<template>
    <main>
        <categories
            :base-route="baseRoute"
            :categories="categories"
        />
    </main>
</template>

<script>
export default {
    data() {
        return {
            baseRoute: '/shapes',
            categories: [
                {
                    name: 'line',
                    alias: '直线',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'triangle',
                    alias: '三角形',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'rectangle',
                    alias: '矩形',
                    children: [
                        {
                            alias: '空心矩形',
                            route: '01',
                        }, {
                            alias: '实心矩形',
                            route: '02',
                        }, {
                            alias: '清除矩形',
                            route: '03',
                        }, {
                            alias: '圆角矩形',
                            route: '04',
                        },
                    ],
                }, {
                    name: 'polygon',
                    alias: '多边形',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    alias: '弧线',
                    children: [
                        {
                            alias: 'arc',
                            route: 'arc/01',
                        }, {
                            alias: 'arcTo',
                            route: 'arcTo/01',
                        },
                    ],
                }, {
                    name: 'circle',
                    alias: '圆',
                    children: [
                        {
                            route: '01',
                        }, {
                            alias: '标靶',
                            route: '02',
                        },
                    ],
                }, {
                    name: 'quadratic-curve-to',
                    alias: '二次贝塞尔曲线',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'bezier-curve-to',
                    alias: '三次贝塞尔曲线',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'stroke',
                    alias: '笔触',
                    children: [
                        {
                            route: 'line-width',
                        }, {
                            route: 'line-join',
                        }, {
                            route: 'line-cap',
                        }, {
                            alias: 'Z',
                            route: 'line-join-02',
                        }, {
                            alias: '线条虚实',
                            route: 'set-line-dash',
                        },
                    ],
                }, {
                    name: 'fill',
                    alias: '填充',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
