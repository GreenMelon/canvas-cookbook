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
                        name: '绘制',
                        instances: [
                            {
                                name: '绘制页面上的图片',
                                route: '/image/draw/01'
                            },{
                                name: '图片缩放',
                                route: '/image/draw/02'
                            },{
                                name: '绘制图片的一部分',
                                route: '/image/draw/03'
                            },{
                                name: '绘制图片和文字',
                                route: '/image/draw/04'
                            },{
                                name: '🎃',
                                route: '/image/draw/halloween'
                            },{
                                name: '视频截图',
                                route: '/image/draw/screenshot'
                            }
                        ],
                    },{
                        name: '裁切',
                        instances: [
                            {
                                name: '01',
                                route: '/image/clip/01'
                            }
                        ],
                    },{
                        name: '合并',
                        instances: [
                            {
                                name: '01',
                                route: '/image/merge/01'
                            }
                        ],
                    },{
                        name: '导出',
                        instances: [
                            {
                                name: 'toDataURL',
                                route: '/image/export/to-data-url'
                            }, {
                                name: '高度限制',
                                route: '/image/export/height-limit'
                            },
                        ],
                    }
                ],
            }
        }
    }
</script>
