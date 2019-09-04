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
            baseRoute: '/pixel',
            categories: [
                {
                    name: 'invert',
                    alias: '反色',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'average',
                    alias: '黑白',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'brightness',
                    alias: '亮度',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'sepia',
                    alias: '怀旧',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'mask',
                    alias: '蒙版',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'alpha',
                    alias: '透明度',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'gaussian-blur',
                    alias: '高斯模糊',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'mosaic',
                    alias: '马赛克',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    alias: '全局',
                    children: [
                        {
                            alias: '透明度',
                            route: 'global-alpha',
                        }, {
                            alias: '混合操作',
                            route: 'global-composite-operation',
                        },
                    ],
                }
            ],
        }
    },
}
</script>
