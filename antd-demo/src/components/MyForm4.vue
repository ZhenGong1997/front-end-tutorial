<template>
    <div>
        MyForm4：内联的水平登录栏，常用在顶部导航栏中。
        <div class="inlineForm">
            <a-form layout="inline" :form="form" @submit="handleSubmit">
                <a-form-item :validate-status="userNameError() ? 'warning' : ''" :help="userNameError() || ''">
                    <a-input v-decorator="[
                        'username',
                        {
                            rules: [
                                { required: true, message: '请输入用户名' }
                            ]
                        }
                    ]" placeholder="用户名">
                        <!-- slot="prefix"， 将a-icon插入到wrapper之前 -->
                        <a-icon slot="prefix" type="user" style="color:rbga(0,0,0,0.25)"></a-icon>
                    </a-input>
                </a-form-item>
                <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
                    <a-input v-decorator="[
                        'password',
                        {
                            rules: [
                                { required: true, message: '请输入密码' }
                            ]
                        }
                    ]" placeholder="密码">
                        <a-icon slot="prefix" type="lock" style="color:rbga(0,0,0,0.25)"></a-icon>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>

function hasErrors(fieldsError) {
    console.log(`fieldsError: ${JSON.stringify(fieldsError)}`)
    return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
    // 首次挂载时 disable 登录按钮
    mounted() {
        this.$nextTick(() => {
            this.form.validateFields()
        })
    },
    data() {
        return {
            hasErrors,
            form: this.$form.createForm(this),
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log(`Received values of form: ${JSON.stringify(values)}`)
                }
            })
        },
        userNameError() {
            const { getFieldError, isFieldTouched } = this.form
            // isFieldTouched 判断一个输入控件是否经历过 
            // getFieldDecorator 或 v-decorator 的值收集时机 options.trigger
            const userNameError = isFieldTouched('username') && getFieldError('username')
            return userNameError
        },
        passwordError() {
            const { getFieldError, isFieldTouched } = this.form
            const passwordError = isFieldTouched('password') && getFieldError('password')
            return passwordError
        }
    }
}
</script>

<style scoped>
.inlineForm {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>