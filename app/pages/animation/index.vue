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
                        name: '颜色动画',
                        instances: [
                            {
                                name: '01',
                                route: '/animation/color/01',
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
