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
                { route: '/path-and-status', name: '状态和路径' },
                { route: '/shapes', name: '基本形状' },
                { route: '/text', name: '文本' },
                { route: '/image', name: '图像' },
                { route: '/pixel', name: '像素' },
                { route: '/gradient', name: '渐变' },
                { route: '/shadow', name: '阴影' },
                { route: '/pattern', name: '图章' },
                { route: '/transform', name: '变形' },
                { route: '/animation', name: '动画' },
                { route: '/events', name: '事件' },
                { route: '/instances', name: '实例' },
                { route: '/plugins', name: '插件' },
            ],
        };
    },
};
</script>

<style lang="less">
@import './less/main.less';
</style>
