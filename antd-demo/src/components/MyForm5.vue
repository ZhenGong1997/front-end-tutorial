<template>
    <div>
        <p>Form 5: 三种布局的表单</p>
        <a-form :layout="formLayout">
            <a-form-item label="表格样式" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                <a-radio-group default-value="horizontal" @change="handleFormLayoutChange">
                    <a-radio-button value="horizontal">Horizontal</a-radio-button>
                    <a-radio-button value="vertical">Vertical</a-radio-button>
                    <a-radio-button value="inline">Inline</a-radio-button>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="Field A" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                <a-input placeholder="input placeholder"></a-input>
            </a-form-item>
            <a-form-item label="Field B" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                <a-input placeholder="input placeholder"></a-input>
            </a-form-item>
            <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
                <a-button type="primary">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formLayout: 'horizontal',
            }
        },
        methods:{
            handleFormLayoutChange(e) {
                this.formLayout = e.target.value
            },
         
        },
        computed:{
            formItemLayout() {
                const {formLayout} = this
                return formLayout === 'horizontal' ? {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 14 },
                } : {}
            },
            buttonItemLayout() {
                const {formLayout} = this
                return formLayout === 'horizontal' ? {
                    wrapperCol: { span: 14, offset: 4 },
                } : {}
            }
        }
    }
</script>

<style scoped>

</style>