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
            baseRoute: '/pattern',
            categories: [
                {
                    alias: '图章',
                    children: [
                        {
                            alias: '图片平铺',
                            route: '01',
                        }, {
                            alias: '文字平铺?',
                            route: '02',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
