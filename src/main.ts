/*
 * @Author: Hongzf
 * @Date: 2022-10-08 13:54:29
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-08 16:48:11
 * @Description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 布局组件
import ElContainer from './components/container'

createApp(App).use(ElContainer).mount('#app')
