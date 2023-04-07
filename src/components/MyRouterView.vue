<template>
    <router-view v-slot="{ Component }">
        <transition :name="transitionName"
                    mode="out-in"
                    @before-leave="emits('beforeLeave')"
                    @after-enter="emits('afterEnter')">
            <component :is="Component" :key="setKey?$route.fullPath:''"/>
        </transition>
    </router-view>
</template>

<script setup>
defineProps({
    /**
     * transition的name，默认没有过渡效果
     * 可选值：1.slide-fade
     */
    transitionName: {
        type: String,
        default: ''
    },
    /**
     * 设置为true时，复用的组件会强制刷新，默认为false
     */
    setKey: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits([
    /**
     * 前一个页面开始离开
     * 回调参数：无
     */
    'beforeLeave',
    /**
     * 后一个页面结束进入
     * 回调参数：无
     */
    'afterEnter'
])
</script>

<style lang="scss" scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
    will-change: transform, opacity;
    transition: transform .5s, opacity .5s;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}

.slide-fade-enter-to {
    transform: translateX(0);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>