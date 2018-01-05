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
                                route: '/image/draw/img'
                            },{
                                name: '🎃',
                                route: '/image/draw/halloween'
                            },{
                                name: '视频截图',
                                route: '/image/draw/screenshot'
                            }
                        ],
                    },{
                        name: '导出',
                        instances: [
                            {
                                name: 'toDataURL',
                                route: '/image/export/to-data-url'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
