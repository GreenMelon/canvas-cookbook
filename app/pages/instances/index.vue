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
            baseRoute: '/instances',
            categories: [
                {
                    alias: '基本图形',
                    children: [
                        {
                            alias: '七巧板',
                            route: 'tangram',
                        },
                    ],
                }, {
                    alias: '调色板',
                    children: [
                        {
                            alias: '调色板',
                            route: 'palette',
                        },
                    ],
                }, {
                    alias: '其他',
                    children: [
                        {
                            alias: '放大镜',
                            route: 'magnifier',
                        }, {
                            route: 'wind',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
