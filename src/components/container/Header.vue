<!--
 * @Author: Hongzf
 * @Date: 2022-10-08 15:22:00
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-08 16:35:49
 * @Description: 布局容器
-->

<template>
    <header class="el-header" :style="{ height }">
        <slot>头部布局</slot>
    </header>
</template>
<!--
  为什么会有两个script标签？
  因为开发组件库的时候，我们要确保每个组件都有⾃⼰的名字，s
  cript setup中没法返回组件的名字，
  所以 我们需要⼀个单独的标签，使⽤options的语法设置组件的name属性。
-->
<script lang="ts">
export default {
    name: 'ElHeader'
};
</script>
<script setup lang="ts">
import { withDefaults } from 'vue';
// 使⽤interface去定义传递的属性类型即可
interface Props {
    height?: string;
}
// 采用ts专有声明，有默认值withDefaults
withDefaults(defineProps<Props>(), {
    height: '60px'
});
// 使⽤ computed去判断container的⽅向是否为垂直，
// ⼿动指定direction和⼦元素中有el-header或者el-footer的 时候是垂直布局，
// 其他情况是⽔平布局。
</script>
<style lang="scss">
@import '../styles/mixin';
@include b(header) {
    padding: $--header-padding;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>
