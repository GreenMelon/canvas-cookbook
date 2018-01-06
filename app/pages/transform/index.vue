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
                        name: '平移',
                        instances: [
                            {
                                name: '01',
                                route: '/transform/translate/01'
                            }
                        ]
                    },{
                        name: '缩放',
                        instances: [
                            {
                                name: '01',
                                route: '/transform/scale/01'
                            },{
                                name: '02 缩放改变线宽',
                                route: '/transform/scale/02'
                            }
                        ]
                    },{
                        name: '旋转',
                        instances: [
                            {
                                name: '以原点为中心旋转',
                                route: '/transform/rotate/01'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
