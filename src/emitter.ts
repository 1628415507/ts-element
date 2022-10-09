/*
 * @Author: Hongzf
 * @Date: 2022-10-09 09:47:44
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-09 09:49:29
 * @Description: 
 */
// mitt：https://www.jb51.net/article/251802.htm
// vue2.x 使用 EventBus 事件总线进行兄弟组件通信，而在Vue3中事件总线模式已经被移除，
// 官方建议使用外部的、实现了事件触发器接口的库,例如 mitt 或 tiny-emitter。
import mitt from "mitt"
import { FormItem } from "./components/form/type"
export type Events = {
  validate: undefined
  addFormItem: FormItem
}
export const emitter = mitt<Events>()
