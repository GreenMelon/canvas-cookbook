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
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
