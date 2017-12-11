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
                                name: '001',
                                route: '/basic/restore/001'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
