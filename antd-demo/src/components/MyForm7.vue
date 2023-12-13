<template>
    <div>
        <p>Form 7: 可动态增减的表单</p>
        <a-form :form="form" @submit="handleSubmit">
            <a-form-item v-for="(key, index) in form.getFieldValue('keys')" :key="key" :label="index === 0 ? '乘客' : ''"
                :required="false" v-bind="index === 0 ? formItemLayout : formItemLayoutWithoutLabel">
                <a-input v-decorator="[
                    `passenger-${key}`,
                    {
                        rules: [
                            // 必填，且不能只包含空格
                            { required: true, whitespace: true, message: '请输入乘客姓名或删除此项' }
                        ],
                        //每当输入或失去焦点是都进行验证
                        validateTrigger: ['onChange', 'onBlur']
                    }
                ]" placeholder="请输入乘客名" style="width:60%"></a-input>
                <!-- 删除键，只有一个项则不显示，且disable -->
                <a-icon  style="margin-left: 10px;" class="dynamic-delete-button" type="minus-circle-o"
                    :disabled="form.getFieldValue('keys').length === 1" v-if="form.getFieldValue('keys').length > 1"
                    @click="() => remove(key)">
                </a-icon>
            </a-form-item>
            <a-form-item v-bind="formItemLayoutWithoutLabel">
                <a-button type="dashed" @click="add">
                    <a-icon type="plus"></a-icon>
                    添加
                </a-button>
            </a-form-item>
            <a-form-item v-bind="formItemLayoutWithoutLabel">
                <a-button type="primary" html-type="submit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
let id = 0
export default {
    created() {
        this.form = this.$form.createForm(this, { name: 'dynamic_form_item' });
        // 自定义一个叫keys属性用在表单绑定中，代表动态表单项的数量，这里keys存的是passenger的唯一id，根据顺序，删除后可能有跳跃，故不能称作index
        // initialValue代表初始值，preserve:true代表即使组件被移除也会保留其值
        this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
    },
    data() {
        return {
            // 有label的，label占4格，没有的前面offset空4格，对齐
            formItemLayout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 20 },
            },
            formItemLayoutWithoutLabel: {
                wrapperCol: { span: 20, offset: 4 },
            }
        }
    },
    methods: {
        add() {
            const keys = this.form.getFieldValue('keys');
            console.log(`keys = ${keys}`)
            const nextKeys = keys.concat(id++);
            console.log(`nextKeys = ${nextKeys}`)
            this.form.setFieldsValue({
                keys: nextKeys
            })
        },
        remove(key) {
            const keys = this.form.getFieldValue('keys');
            // 只有一个不删除
            if (keys.length === 1) return;
            this.form.setFieldsValue({
                keys: keys.filter(k => k !== key)
            })
        },
        handleSubmit(e) { 
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if(!err){
                    // const {keys, names} = values
                    console.log('Received values of form: ', values);
                    console.log('Merged values:', values.keys.map(key => values[`passenger-${key}`]));

                }
            })
        }
    }

}
</script>

<style>
.dynamic-delete-button {
    cursor: pointer;
    position: relative;
    top: 4px;
    font-size: 24px;
    color: #999;
    transition: all 0.3s;
}

.dynamic-delete-button:hover {
    color: #777;
}

.dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>