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
                                route: '/basic-shapes/line/001'
                            }
                        ]
                    },{
                        name: '三角形',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/triangle/001'
                            }
                        ]
                    },{
                        name: '矩形',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/rectangle/001'
                            }
                        ]
                    },{
                        name: '圆',
                        instances: [
                            {
                                name: '基础',
                                route: '/basic-shapes/circle/001'
                            }
                        ]
                    },{
                        name: '笔触',
                        instances: [
                            {
                                name: '001',
                                route: '/basic-shapes/stroke/001'
                            }
                        ]
                    },{
                        name: '填充',
                        instances: [
                            {
                                name: '001',
                                route: '/basic-shapes/fill/001'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
