<template>
    <main>
        <categories
            :base-route="baseRoute"
            :categories="categories"
        />
    </main>
</template>

<script>
export default {
    data() {
        return {
            baseRoute: '/path-and-status',
            categories: [
                {
                    name: 'path',
                    alias: '路径',
                    children: [
                        {
                            alias: '判断点是否在路径上',
                            route: '01',
                        },
                    ],
                }, {
                    name: 'clip',
                    alias: '指定可视区域',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                }, {
                    name: 'restore',
                    alias: '保存状态 && 恢复状态',
                    children: [
                        {
                            route: '01',
                        },
                    ],
                },
            ],
        }
    },
}
</script>
