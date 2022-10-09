/*
 * @Author: Hongzf
 * @Date: 2022-10-08 13:54:29
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-09 10:21:24
 * @Description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 组件注册挂载
import ElContainer from './components/container'// 布局组件
import ElForm from './components/form'// 表单组件

createApp(App).use(ElContainer).use(ElForm).mount('#app')
