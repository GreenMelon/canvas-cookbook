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
                    },{
                        name: '黑白',
                        instances: [
                            {
                                name: '01',
                                route: '/pixel/average/01'
                            }
                        ],
                    },{
                        name: '亮度',
                        instances: [
                            {
                                name: '01',
                                route: '/pixel/brightness/01'
                            }
                        ],
                    },{
                        name: '怀旧',
                        instances: [
                            {
                                name: '01',
                                route: '/pixel/sepia/01'
                            }
                        ],
                    },{
                        name: '蒙版',
                        instances: [
                            {
                                name: '01',
                                route: '/pixel/mask/01'
                            }
                        ],
                    },{
                        name: '透明度',
                        instances: [
                            {
                                name: '01',
                                route: '/pixel/alpha/01'
                            }
                        ],
                    },{
                        name: '高斯模糊',
                        instances: [
                            {
                                name: '01',
                                route: '/pixel/gaussian-blur/01'
                            }
                        ],
                    },{
                        name: '全局',
                        instances: [
                            {
                                name: '透明度',
                                route: '/pixel/global-alpha'
                            },{
                                name: '混合操作',
                                route: '/pixel/global-composite-operation'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
