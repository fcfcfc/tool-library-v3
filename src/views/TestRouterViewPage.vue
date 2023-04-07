<template>
    <div>
        <div class="testPage" :style="{'background-color':`${$route.params.color}`}"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.testPage {
    width: 50%;
    height: 40%;
    border-radius: 12px;
}
</style>