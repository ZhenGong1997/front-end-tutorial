<template>
    <div>
        <p>我是Demo1</p>
        <p>n = {{n}}</p>
        <p>m = {{ obj.m }}</p>
        <button @click="add">+1</button>
        <button @click="setM">set m</button>
        {{ array }}
        <button @click="addItem">add item to array</button>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'Demo1',
    data() {
        return {
            n: 0,
            array: [1, 2, 3, 4, 5],
            obj:{a:1}
        }
    },
    methods: {
        add() {
            this.n += 1
        },
        setM() {
            Vue.set(this.obj, 'm', 100)
            console.log(this.obj)
        },
        addItem() {
            this.array.unshift(100)
            console.log(this.array)
        }
    }
}
</script>