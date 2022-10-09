<!--
 * @Author: Hongzf
 * @Date: 2022-10-08 18:05:24
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-09 11:36:37
 * @Description:  表单项
-->
<template>
    <div class="el-form-item">
        <!-- 标签 -->
        <label v-if="label">{{ label }}</label>
        <!-- 表单组件插槽 -->
        <slot />
        <!-- 错误提示 -->
        <p v-if="error" class="error">
            {{ error }}
        </p>
    </div>
</template>
<script lang="ts">
export default {
    name: 'ElFormItem'
};
</script>

<script setup lang="ts">
import Schema from 'async-validator';
import { inject, onMounted, ref } from 'vue';
import { FormItem, key } from './type';
// 用于跨组件通信
import { emitter } from '../../emitter';
// 定义数据格式
interface Props {
    label?: string;
    prop?: string;
}
// 设置默认值
const props = withDefaults(defineProps<Props>(), {
    label: '',
    prop: ''
});
// ⼦组件内部通过inject获取key对应的值
const formData = inject(key);
// console.log('【 formData 】-44', formData)

const o: FormItem = {
    validate
};
// 通过 defineDepose的⽅式暴露给⽗元素⽅法，可以让⽗元素调⽤⾃⼰的⽅法。
defineExpose(o);
// 加载方法
onMounted(() => {
    if (props.prop) {
        //接收表单组触发的事件
        emitter.on('validate', () => {
            validate();
        });
        // 发送addFormItem方法
        emitter.emit('addFormItem', o);
    }
});
// 错误
const error = ref('');
// 验证方法
function validate() {
    if (formData?.rules === undefined) {
        return Promise.resolve({ result: true });
    }
    const rules = formData.rules[props.prop]; //相应字段对应的规则
    const value = formData.model[props.prop]; //相应字段对应的值
    const schema = new Schema({ [props.prop]: rules });
    // 校验
    return schema.validate({ [props.prop]: value }, (errors: any) => {
        if (errors) {
            error.value = errors[0].message || '校验错误';
        } else {
            error.value = '';
        }
    });
}
</script>

<style lang="scss">
@import '../styles/mixin';

@include b(form-item) {
    margin-bottom: 22px;
    label {
        line-height: 1.2;
        margin-bottom: 5px;
        display: inline-block;
    }
    & .el-form-item {
        margin-bottom: 0;
    }
}
.error {
    color: red;
}
</style>
