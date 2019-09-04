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
            baseRoute: '/gradient',
            categories: [
                {
                    name: 'linear',
                    alias: '线性渐变',
                    children: [
                        {
                            route: '01',
                        }, {
                            alias: '渐变圆环',
                            route: '02',
                        }, {
                            alias: '非对称的渐变圆环',
                            route: '03',
                        },
                    ]
                }, {
                    name: 'radial',
                    alias: '径向渐变',
                    children: [
                        {
                            route: '01',
                        }, {
                            route: '02',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
