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
                    },{
                        name: '调色板',
                        instances: [
                            {
                                name: '调色板',
                                route: '/instances/palette'
                            }
                        ]
                    },{
                        name: '其他',
                        instances: [
                            {
                                name: '放大镜',
                                route: '/instances/magnifier'
                            },{
                                name: 'wind',
                                route: '/instances/wind'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
