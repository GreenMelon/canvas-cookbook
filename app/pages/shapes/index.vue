<template>
    <main>
        <ul class="mod-categories list-category">
            <li v-for="category in categories" class="item-main">
                <h2 v-text="category.name"></h2>
                <ul class="list-instance">
                    <li v-for="instance in category.instances" class="item-sub">
                        <router-link :to="instance.route">{{ instance.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {
                        name: '直线',
                        instances: [
                            {
                                name: '基础',
                                route: '/shapes/line/001'
                            }
                        ]
                    },{
                        name: '三角形',
                        instances: [
                            {
                                name: '基础',
                                route: '/shapes/triangle/001'
                            }
                        ]
                    },{
                        name: '矩形',
                        instances: [
                            {
                                name: '空心矩形',
                                route: '/shapes/rectangle/001'
                            },{
                                name: '实心矩形',
                                route: '/shapes/rectangle/002'
                            },{
                                name: '清除矩形',
                                route: '/shapes/rectangle/003'
                            }
                        ]
                    },{
                        name: '弧线',
                        instances: [
                            {
                                name: 'arc',
                                route: '/shapes/arc/001'
                            },{
                                name: 'arcTo',
                                route: '/shapes/arcTo/001'
                            }
                        ]
                    },{
                        name: '圆',
                        instances: [
                            {
                                name: '基础',
                                route: '/shapes/circle/001'
                            },{
                                name: '标靶',
                                route: '/shapes/circle/002'
                            }
                        ]
                    },{
                        name: '笔触',
                        instances: [
                            {
                                name: 'line-width',
                                route: '/shapes/stroke/line-width'
                            },{
                                name: 'line-join',
                                route: '/shapes/stroke/line-join'
                            }
                        ]
                    },{
                        name: '填充',
                        instances: [
                            {
                                name: '001',
                                route: '/shapes/fill/001'
                            },{
                                name: '文本填充',
                                route: '/shapes/fill/fill-text'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
