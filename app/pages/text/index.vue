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
                        name: '描边文本',
                        instances: [
                            {
                                name: '01',
                                route: '/text/stroke-text/01'
                            }
                        ],
                    },{
                        name: '填充文本',
                        instances: [
                            {
                                name: '01',
                                route: '/text/fill-text/01'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
