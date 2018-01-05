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
                            },{
                                name: '02',
                                route: '/text/fill-text/02'
                            }
                        ],
                    },{
                        name: '获取文本宽度',
                        instances: [
                            {
                                name: '01',
                                route: '/text/measure-text/01'
                            },{
                                name: '水平居中',
                                route: '/text/measure-text/02'
                            }
                        ],
                    },{
                        name: '水平对齐',
                        instances: [
                            {
                                name: '01',
                                route: '/text/text-align/01'
                            }
                        ],
                    },{
                        name: '垂直对齐',
                        instances: [
                            {
                                name: '01',
                                route: '/text/text-base-line/01'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
