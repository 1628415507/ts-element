<!--
 * @Author: Hongzf
 * @Date: 2022-10-08 13:58:53
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-09 11:25:52
 * @Description: 
-->
<template>
    <div class="el-form">
        <!-- 插槽 -->
        <slot />
    </div>
</template>
<script lang="ts">
export default {
    name: 'ElForm'
};
</script>

<script setup lang="ts">
import { PropType, provide } from 'vue';
import { Rules } from 'async-validator';
import { ref } from 'vue';
import { emitter } from '../../emitter';
import { FormItem, key } from './type';
// 接收传入 的数据
const props = defineProps({
    model: { type: Object, required: true },
    // TODO?
    rules: { type: Object as PropType<Rules> }
});
// 通过provide向所有⼦元素提供form组件的数据，
// 把form组件的数据存到对应的key上,传给子组件
provide(key, {
    model: props.model,
    rules: props.rules
});
// 保存表单项数据
const items = ref<FormItem[]>([]);
// 接收addFormItem方法，获取和保存所有表单项
emitter.on('addFormItem', item => {
  // console.log('【 接收addFormItem方法 】-40', item)
    items.value.push(item);
});

// cb: (isValid: boolean) => void：参数是一个回调函数，
// 回调函数的入参是布尔型，回调函数的返回值没有任何类型
function validate(cb: (isValid: boolean) => void) {
    // 这个代码实际执⾏的是每个表单输⼊项内部的validate⽅法(返回promise)
    const tasks = items.value.map(item => item.validate());
    // tasks是一个Promise数组
    Promise.all(tasks)
        .then(() => {
            cb(true); // 全部验证通过，返回true
        })
        .catch(() => {
            cb(false);
        });
}
// 对外暴露方法
defineExpose({
    validate
});
</script>

<style lang="scss">
@import '../styles/mixin';
@include b(form) {
    margin-top: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 300px;
}
</style>
