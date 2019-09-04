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
            baseRoute: '/shadow',
            categories: [
                {
                    alias: '阴影',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }
            ],
        }
    },
}
</script>
