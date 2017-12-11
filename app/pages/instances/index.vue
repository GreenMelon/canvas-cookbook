<template>
    <main>
        <categories :categories="categories"></categories>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {
                        name: '基本图形',
                        instances: [
                            {
                                name: '七巧板',
                                route: '/instances/tangram'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
