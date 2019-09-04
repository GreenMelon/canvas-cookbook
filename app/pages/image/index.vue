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
            baseRoute: '/image',
            categories: [
                {
                    name: 'draw',
                    alias: '绘制',
                    children: [
                        {
                            alias: '绘制页面上的图片',
                            route: '01',
                        }, {
                            alias: '图片缩放',
                            route: '02',
                        }, {
                            alias: '绘制图片的一部分',
                            route: '03',
                        }, {
                            alias: '绘制图片和文字',
                            route: '04',
                        }, {
                            alias: '🎃',
                            route: 'halloween',
                        }, {
                            alias: '视频截图',
                            route: 'screenshot',
                        },
                    ],
                }, {
                    name: 'clip',
                    alias: '裁切',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'merge',
                    alias: '合并',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'export',
                    alias: '导出',
                    children: [
                        {
                            alias: 'toDataURL',
                            route: 'to-data-url',
                        }, {
                            alias: '高度限制',
                            route: 'height-limit',
                        },
                    ],
                }
            ],
        }
    }
}
</script>
