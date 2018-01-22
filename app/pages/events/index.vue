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
                        name: 'mouse',
                        instances: [
                            {
                                name: '01',
                                route: '/events/mouse/01'
                            }
                        ]
                    }
                ],
            }
        }
    }
</script>
