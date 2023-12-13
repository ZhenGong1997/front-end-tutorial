<template>
    <div>
        {{ obj }}
        <button @click="obj = {a:1, b:2}">obj = 新对象</button>
        <button @click="obj.a += 10">obj.a += 10</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
           obj:{
               a:1,
               b:2
           }
        }
    },
    watch:{
        obj:{
            handler(){
                console.log('obj changed')
            },
            deep:true
        }
    },
}
</script>