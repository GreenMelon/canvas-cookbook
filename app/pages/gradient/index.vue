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
                                name: '001',
                                route: '/gradient/linear/001'
                            }
                        ]
                    },{
                        name: '径向渐变',
                        instances: [
                            {
                                name: '001',
                                route: '/gradient/radial/001'
                            },{
                                name: '002',
                                route: '/gradient/radial/002'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
