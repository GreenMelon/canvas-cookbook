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
            baseRoute: '/text',
            categories: [
                {
                    name: 'stroke-text',
                    alias: '描边文本',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'fill-text',
                    alias: '填充文本',
                    children: [
                        {
                            route: '01',
                        }, {
                            route: '02',
                        }, {
                            route: '03',
                            alias: '解决高清屏下绘制文字模糊',
                        }, {
                            route: '04',
                            alias: '解决高清屏下绘制文字模糊',
                        },
                    ],
                }, {
                    name: 'measure-text',
                    alias: '获取文本宽度',
                    children: [
                        {
                            route: '01',
                        }, {
                            alias: '水平居中',
                            route: '02',
                        },
                    ],
                }, {
                    name: 'text-align',
                    alias: '水平对齐',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'text-base-line',
                    alias: '垂直对齐',
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
