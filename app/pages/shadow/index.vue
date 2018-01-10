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
                        name: '阴影',
                        instances: [
                            {
                                name: '01',
                                route: '/shadow/01'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
