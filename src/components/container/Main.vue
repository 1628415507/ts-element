<!--
 * @Author: Hongzf
 * @Date: 2022-10-08 16:43:10
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-08 17:10:52
 * @Description: 
-->
<template>
    <main class="el-main">
        <slot />
    </main>
</template>

<script lang="ts">
export default {
    name: 'ElMain'
};
</script>

<script setup lang="ts"></script>
<style lang="scss">
@import '../styles/mixin';
@include b(main) {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: $--main-padding;
}
</style>
