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
            baseRoute: '/animation',
            categories: [
                {
                    alias: '实例',
                    children: [
                        {
                            alias: '颜色动画',
                            route: 'color',
                        }, {
                            alias: '倒计时',
                            route: 'countdown',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
