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
                        name: '实例',
                        instances: [
                            {
                                name: '🎃',
                                route: '/draw-image/instances/halloween'
                            }
                        ]
                    },{
                        name: 'toDataURL',
                        instances: [
                            {
                                name: '001',
                                route: '/draw-image/to-data-url'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
