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
                        name: '反色',
                        instances: [
                            {
                                name: '01',
                                route: '/pixel/invert/01'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
