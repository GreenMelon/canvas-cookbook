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
                                name: '01',
                                route: '/pattern/01'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
