/*
 * @Author: Hongzf
 * @Date: 2022-10-08 18:16:45
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-10-09 09:22:20
 * @Description: 专⻔管理表单组件⽤到的相关类型
 */

import { InjectionKey } from "vue"
import { Rules, Values } from "async-validator"

export type FormData = {
  model: Record<string, unknown>
  rules?: Rules
}

export type FormItem = {
  validate: () => Promise<Values>
}

export type FormType = {
  validate: (cb: (isValid: boolean) => void) => void
}
// 关于prvide和inject的类型系统，我们可以使⽤Vue提供的InjectiveKey来声明。
export const key: InjectionKey<FormData> = Symbol("form-data")
