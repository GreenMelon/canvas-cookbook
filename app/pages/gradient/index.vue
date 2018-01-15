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
                        name: '线性渐变',
                        instances: [
                            {
                                name: '01',
                                route: '/gradient/linear/01'
                            },{
                                name: '渐变圆环',
                                route: '/gradient/linear/02'
                            },{
                                name: '非对称的渐变圆环',
                                route: '/gradient/linear/03'
                            }
                        ]
                    },{
                        name: '径向渐变',
                        instances: [
                            {
                                name: '01',
                                route: '/gradient/radial/01'
                            },{
                                name: '02',
                                route: '/gradient/radial/02'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
