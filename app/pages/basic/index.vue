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
                        name: '保存状态 && 恢复状态',
                        instances: [
                            {
                                name: '01',
                                route: '/basic/restore/01'
                            }
                        ],
                    }
                ],
            }
        }
    }
</script>
