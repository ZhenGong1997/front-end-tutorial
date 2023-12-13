<template>
    <div>
        MyForm3：根据不同情况执行不同的校验规则。
        <a-form :form="form">
            <a-form-item label = "姓名" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                <a-input v-decorator="[
                    'username',
                    {
                        rules: [
                            {required: true, message: '请输入姓名'}
                        ]
                    }
                ]" @placeholder="请输入用户名"></a-input>
            </a-form-item>
            <a-form-item label="昵称" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                <a-input v-decorator="[
                    'nickname',
                    {
                        rules: [
                            {required: checkNick, message: '请输入昵称'}
                        ]
                    }
                ]"></a-input>
            </a-form-item>
            <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
                <a-checkbox :checked="checkNick" @change="handleChange">
                    Nickname is required
                </a-checkbox>
            </a-form-item>
            <a-form-item :wrapper-col="formTailLayout.wrapperCol">
                <a-button type="primary" @click="check">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol : { span: 8}
}

const formTailLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 8, offset: 5 }
}

export default {
    data() {
        return {
            form: this.$form.createForm(this),
            formItemLayout,
            formTailLayout,
            checkNick: false,
        }
    },
    methods:{
        handleChange(e){
            this.checkNick = e.target.checked
            /*
            this.$nextTick 确保 this.form.validateFields(['nickname'], {force: true}) 
            在 this.checkNick = e.target.checked 导致的任何 DOM 更新之后执行。
            */
            this.$nextTick(() => {
                this.form.validateFields(['nickname'], {force: true})
            })
        },
        check(){
            // 校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
            this.form.validateFields((err, values) => {
                if(!err){
                    console.log(`success! values = `,values)
                }
            })
        }
    }
}
</script>

<style scoped></style>