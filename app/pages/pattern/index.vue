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
                        name: '图章',
                        instances: [
                            {
                                name: '001',
                                route: '/pattern/001'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
