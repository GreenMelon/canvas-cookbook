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
                    }
                ],
            }
        }
    }
</script>
