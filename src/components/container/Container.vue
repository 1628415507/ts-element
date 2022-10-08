<!--
 * @Author: Hongzf
 * @Date: 2022-10-08 15:22:00
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-08 16:40:08
 * @Description: 布局容器
-->

<template>
    <section class="el-container" :class="{ 'is-vertical': isVertical }">
        <slot>布局容器</slot>
    </section>
</template>
<!--
  为什么会有两个script标签？
  因为开发组件库的时候，我们要确保每个组件都有⾃⼰的名字，s
  cript setup中没法返回组件的名字，
  所以 我们需要⼀个单独的标签，使⽤options的语法设置组件的name属性。
-->
<script lang="ts">
export default {
    name: 'ElContainer'
};
</script>
<script setup lang="ts">
import { useSlots, computed, VNode, Component } from 'vue';
// 使⽤interface去定义传递的属性类型即可
interface Props {
    direction?: string;
}
// 定义props，采用ts专有声明，无默认值
const props = defineProps<Props>();
// console.log('【 props 】-32', props);
const slots = useSlots();
// console.log('【 slots 】-35', slots);
// 使⽤ computed去判断container的⽅向是否为垂直，
// ⼿动指定direction和⼦元素中有el-header或者el-footer的 时候是垂直布局，
// 其他情况是⽔平布局。
const isVertical = computed(() => {
    if (slots && slots.default) {
        console.log('【 slots.default 】-38', slots.default());
        return slots.default().some((vn: VNode) => {
            console.log('【 vn 】-40', vn);
            const tag = (vn.type as Component).name;
            return tag === 'ElHeader' || tag === 'ElFooter';
        });
    } else {
        if (props.direction === 'vertical') {
            return true;
        } else {
            return false;
        }
    }
});
</script>
<style lang="scss">
@import '../styles/mixin';
@include b(container) {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;

    @include when(vertical) {
        flex-direction: column;
    }
    // 相当于
    // .el-container.is-vertical {
    //   flex-direction: column;
    // }
}
</style>
