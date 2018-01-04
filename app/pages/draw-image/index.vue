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
                                name: '🎃',
                                route: '/draw-image/instances/halloween'
                            },{
                                name: '视频截图',
                                route: '/draw-image/instances/screenshot'
                            }
                        ],
                    },{
                        name: 'toDataURL',
                        instances: [
                            {
                                name: '001',
                                route: '/draw-image/to-data-url'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
