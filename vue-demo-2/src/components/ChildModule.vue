<template>
    <button @click="show =! show">show = {{ show }}</button>
    <div v-if="show" >
        <pre>
            子组件：props接受来自父组件的信息: 
            {{ msg }} 
            <button @click="updateMsg">更新信息</button>
            姓名:{{ person.name }}
            年龄:{{ person.age }}
        </pre>
        {{ $attrs }}
        <div class="btn-wrap">
            <button v-bind="$attrs">click me</button>
        </div>
        
    </div>
</template>
<script>

export default {
    props: {
        msg: String,
        person: {
            type: Object,
            default:{}
        }
    },
    data() {
        return {
            show: true
        }
    },
    
    methods: {
        updateMsg() {
            this.$emit('update:msg', this.msg + '!') // 触发父组件的事件
        },
       
    },

    // events:['update-msg']

}
</script>