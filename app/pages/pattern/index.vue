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
                        name: '图章',
                        instances: [
                            {
                                name: '图片平铺',
                                route: '/pattern/01'
                            },{
                                name: '文字平铺?',
                                route: '/pattern/02'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
