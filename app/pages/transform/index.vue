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
            baseRoute: '/transform',
            categories: [
                {
                    name: 'translate',
                    alias: '平移',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'scale',
                    alias: '缩放',
                    children: [
                        {
                            route: '01',
                        }, {
                            alias: '缩放改变线宽',
                            route: '02',
                        },
                    ],
                }, {
                    name: 'rotate',
                    alias: '旋转',
                    children: [
                        {
                            alias: '以原点为中心旋转',
                            route: '01',
                        }, {
                            alias: '以图形中心为中心旋转',
                            route: '02',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
