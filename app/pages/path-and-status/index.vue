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
                        name: '路径',
                        instances: [
                            {
                                name: '判断点是否在路径上',
                                route: '/path-and-status/path/01'
                            }
                        ],
                    },{
                        name: '指定可视区域',
                        instances: [
                            {
                                name: '01',
                                route: '/path-and-status/clip/01'
                            }
                        ],
                    },{
                        name: '保存状态 && 恢复状态',
                        instances: [
                            {
                                name: '01',
                                route: '/path-and-status/restore/01'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
