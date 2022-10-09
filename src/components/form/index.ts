import {App} from 'vue'
import ElForm from './Form.vue'
import ElFormItem from './FormItem.vue'
import ElInput from './Input.vue'

// 我们对外暴露了 ⼀个对象，对象的install⽅法中，
// 我们使⽤app.component注册这五个组件。
export default {
  install(app:App){
    app.component(ElForm.name,ElForm)
    app.component(ElFormItem.name,ElFormItem)
    app.component(ElInput.name,ElInput)
  }
}