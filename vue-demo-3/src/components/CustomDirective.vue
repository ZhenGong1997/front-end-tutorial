<template>
    <div>
        <button v-on2:click="hi">点我</button>
        asdasda
    </div>
</template>

<script>
    export default {
        name: 'CustomDirective',
        directives:{
            on2:{
                bind(el, binding){
                    el.addEventListener(binding.arg, binding.value)
                },
                unbind(el, binding){
                    el.removeEventListener(binding.arg, binding.value)
                }
            }
        },
        methods: {
            hi(){
                console.log('hi')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>