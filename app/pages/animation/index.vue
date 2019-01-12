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
                        name: '实例',
                        instances: [
                            {
                                name: '颜色动画',
                                route: '/animation/color',
                            }, {
                                name: '倒计时',
                                route: '/animation/countdown',
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
