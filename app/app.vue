<style lang="less">
    @import './less/main.less';
</style>

<template>
    <div id="app">
        <aside>
            <ul class="mod-menu list-chapter">
                <li v-for="chapter in chapters" class="item">
                    <router-link
                        :to="chapter.route"
                        :class="{active: $route.path.startsWith(chapter.route)}"
                        v-text="chapter.name">
                    </router-link>
                </li>
            </ul>
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
    /**
     * 这个文件提供了路由的挂载元素
     */
    export default {
        data() {
            return {
                chapters: [
                    { route: '/basic-shapes', name: '基本形状' },
                    { route: '/draw-image', name: '图像的绘制' },
                    { route: '/instances', name: '实例' }
                ]
            }
        }
    };
</script>
