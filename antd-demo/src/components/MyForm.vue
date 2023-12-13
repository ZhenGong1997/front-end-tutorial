<template>
    <div class="form">
        <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
            <a-form-item>
                <a-input v-decorator="[
                    'userName',
                    { rules: [
                        { required: true, message: '请输入用户名!' },
                        { min:8, max:20, message: '用户名必须在8-20个字符之间'}
                    ] },
                ]" placeholder="用户名">
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-decorator="[
                    'password',
                    { rules: [
                        { required: true, message: '请输入密码!' },
                        { min: 8, 'message': '密码长度不能小于8位'},
                        {pattern: /[a-z]/, message:'密码必须包含小写字母'},
                    ] },
                ]" type="password" placeholder="密码">
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox v-decorator="[
                    'remember',
                    {
                        valuePropName: 'checked',
                        initialValue: true,
                    },
                ]">
                    Remember me
                </a-checkbox>
                <a class="login-form-forgot" href="">
                    Forgot password
                </a>
                <a-button type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or
                <a href="">
                    register now!
                </a>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            form: this.$form.createForm(this),
        }
    },
    methods: {
        handleSubmit(e) {
            // 阻止submit后页面刷新
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        },
    },
}
</script>

<style scoped>
.form{
    display:flex;
    justify-content: center;
    align-items: center;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>