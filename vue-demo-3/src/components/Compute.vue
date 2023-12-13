<template>
    <div>
        {{ fullName }}
    </div>
</template>

<script>
export default{
    data(){
        return{
           person:{
            firstName:'Jack',
            lastName:'Ma'
           }
        }
    },

    computed:{
        fullName:{
            get(){
                return this.person.firstName + ' ' + this.person.lastName
            },
            set(newValue){
                const names = newValue.split(' ')
                this.person.firstName = names[0]
                this.person.lastName = names[1]
            }
        }
    }
}
</script>