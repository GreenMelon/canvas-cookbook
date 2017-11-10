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
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
