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
            baseRoute: '/plugins',
            categories: [
                {
                    name: 'dom-to-image',
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
