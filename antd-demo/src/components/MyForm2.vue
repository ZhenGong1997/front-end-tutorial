<!-- 
这是一个使用 Vue 和 Ant Design Vue（`a-`前缀的组件）实现的简单表单。以下是逐行的翻译：
1. `<a-form :form="form" @submit="handleSubmit">` - 使用 Ant Design Vue 提供的表单组件，并将表单实例 `form` 绑定到组件上，同时监听表单提交事件，触发 `handleSubmit` 方法。
2. `<a-form-item label="事件">` - 定义一个表单项，带有一个标签（label）为 "事件"。
3. `<a-input v-decorator="[ 'note', { rules: [ { required: true, message: '请输入事件' }, ] } ]"></a-input>` - 使用 Ant Design Vue 提供的输入框组件，同时使用 `v-decorator` 指令来配置表单项的装饰器，将其与表单的 `note` 字段进行绑定。设置了一个规则，要求输入框内容不能为空。
4. `<a-form-item label="性别">` - 定义另一个表单项，带有一个标签为 "性别"。
5. `<a-select v-decorator="[ 'gender', { rules: [ { required: true, message: '请选择性别' }, ] } ]" placeholder="--请选择--" @change="handleSelectChange">` - 使用 Ant Design Vue 提供的下拉选择框组件，同时使用 `v-decorator` 指令配置表单项的装饰器，将其与表单的 `gender` 字段进行绑定。设置了一个规则，要求选择框内容不能为空。`@change` 监听下拉选择框的变化事件，触发 `handleSelectChange` 方法。
6. `<a-select-option value="male">男</a-select-option>` 和 `<a-select-option value="female">女</a-select-option>` - 定义下拉选择框中的选项，分别表示 "男" 和 "女"。
7. `<a-button type="primary" html-type="submit">提交</a-button>` - 使用 Ant Design Vue 提供的按钮组件，设置按钮类型为主按钮（primary），并将按钮类型设置为提交类型。
8. `</a-form>` - 表单结束标签。
这个代码片段创建了一个包含两个字段（"事件"和"性别"）的表单，其中包括输入框和下拉选择框，同时设置了一些表单验证规则。
-->

<template>
    <div>
        MyForm2： 使用 setFieldsValue 来动态设置其他控件的值。
        <a-form :form="form" :label-col="{span: 5}" :wrapper-col="{ span:12 }" @submit="handleSubmit">
            <a-form-item label="事件">
                <a-input v-decorator="[
                    'note',
                    {
                        rules: [
                            { required: true, message: '请输入事件' },
                        ]
                    }
                ]"></a-input>
            </a-form-item>
            <a-form-item label="性别">
                <a-select v-decorator="[
                    'gender',
                    {
                        rules: [
                            { required: true, message: '请选择性别' },
                        ]
                    }
                ]" placeholder="--请选择--" @change="handleSelectChange">
                    <a-select-option value="male">
                        男
                    </a-select-option>
                    <a-select-option value="female">
                        女
                    </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                <a-button type="primary" html-type="submit">
                    提交
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 创建表单
            form: this.$form.createForm(this),
        }
    },
    methods:{
        handleSubmit(e){
            // 阻止submit后页面刷新
            e.preventDefault()
            // 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            })
        },
        handleSelectChange(value){
            console.log(value)
            // 动态设置其他表单项的值
            this.form.setFieldsValue({
                note:`你好，${value === "male" ? "先生" : "女士"}！`
            })
        }
    }
}
</script>

<style lang="css" scoped></style>
