<template>
    <el-config-provider :locale="locale">
        <el-menu :default-active="$route.path" mode="horizontal" :router="true">
            <el-sub-menu index="/testRouterView">
                <template #title>vue-router</template>
                <el-menu-item index="/testRouterView/testRouterViewPage/skyblue">testPage1</el-menu-item>
                <el-menu-item index="/testRouterView/testRouterViewPage/orangered">testPage2</el-menu-item>
            </el-sub-menu>
        </el-menu>
        <div class="content" :class="{'setOverflowHidden':styleFlag}">
            <my-router-view class="page"
                            :set-key="true"
                            @before-leave="styleFlag=true"
                            @after-enter="styleFlag=false"
                            transition-name="slide-fade"/>
        </div>
    </el-config-provider>
</template>

<style scoped lang="scss">
.content {
    padding: 16px;
    &.setOverflowHidden {
        overflow: hidden;
    }
    .page {
        height: 100%;
    }
}
</style>
<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import MyRouterView from '@/components/MyRouterView.vue'
import {ref} from 'vue'

const locale = zhCn
const styleFlag = ref(false)
</script>