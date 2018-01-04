<template>
    <main>
        <categories :categories="categories"></categories>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {
                        name: '直线',
                        instances: [
                            {
                                name: '基础',
                                route: '/shapes/line/01'
                            }
                        ]
                    },{
                        name: '三角形',
                        instances: [
                            {
                                name: '基础',
                                route: '/shapes/triangle/01'
                            }
                        ]
                    },{
                        name: '矩形',
                        instances: [
                            {
                                name: '空心矩形',
                                route: '/shapes/rectangle/01'
                            },{
                                name: '实心矩形',
                                route: '/shapes/rectangle/02'
                            },{
                                name: '清除矩形',
                                route: '/shapes/rectangle/03'
                            },{
                                name: '圆角矩形',
                                route: '/shapes/rectangle/04'
                            }
                        ]
                    },{
                        name: '多边形',
                        instances: [
                            {
                                name: '01',
                                route: '/shapes/polygon/01'
                            }
                        ]
                    },{
                        name: '弧线',
                        instances: [
                            {
                                name: 'arc',
                                route: '/shapes/arc/01'
                            },{
                                name: 'arcTo',
                                route: '/shapes/arcTo/01'
                            }
                        ]
                    },{
                        name: '圆',
                        instances: [
                            {
                                name: '基础',
                                route: '/shapes/circle/01'
                            },{
                                name: '标靶',
                                route: '/shapes/circle/02'
                            }
                        ]
                    },{
                        name: '二次贝塞尔曲线',
                        instances: [
                            {
                                name: '01',
                                route: '/shapes/quadratic-curve-to/01'
                            }
                        ]
                    },{
                        name: '三次贝塞尔曲线',
                        instances: [
                            {
                                name: '01',
                                route: '/shapes/bezier-curve-to/01'
                            }
                        ]
                    },{
                        name: '笔触',
                        instances: [
                            {
                                name: 'line-width',
                                route: '/shapes/stroke/line-width'
                            },{
                                name: 'line-join',
                                route: '/shapes/stroke/line-join'
                            },{
                                name: 'line-cap',
                                route: '/shapes/stroke/line-cap'
                            },{
                                name: 'Z',
                                route: '/shapes/stroke/line-join-02'
                            },{
                                name: '线条虚实',
                                route: '/shapes/stroke/set-line-dash'
                            },
                        ]
                    },{
                        name: '填充',
                        instances: [
                            {
                                name: '01',
                                route: '/shapes/fill/01'
                            },{
                                name: '文本填充',
                                route: '/shapes/fill/fill-text'
                            }
                        ]
                    }
                ],
            }
        }
    }
</script>
