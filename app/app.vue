<style lang="less">
    @import './less/main.less';
</style>

<template>
    <div id="app">
        <modules :modules="modules"></modules>
        <router-view></router-view>
    </div>
</template>

<script>
    import './components/modules';
    import './components/categories';

    export default {
        data() {
            return {
                modules: [
                    { route: '/basic', name: '基础' },
                    { route: '/shapes', name: '基本形状' },
                    { route: '/gradient', name: '渐变' },
                    { route: '/pattern', name: '图章' },
                    { route: '/text', name: '文本' },
                    { route: '/image', name: '图像' },
                    { route: '/pixel', name: '像素' },
                    { route: '/transform', name: '变形' },
                    { route: '/instances', name: '实例' },
                ]
            }
        }
    };
</script>
