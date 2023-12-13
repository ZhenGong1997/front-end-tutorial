<template>
    <!-- <button :class="'btn-'+type">
        <slot>默认值</slot>
    </button>
    <header><slot name="header"></slot></header>
    <main><slot name="content"></slot></main>
    <footer><slot name="footer"></slot></footer> -->
    <div>
        <slot :text="greetingMsg" :count="1"></slot>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
    type: {
        type: String,
        default: 'small'
    }
})
const greetingMsg = ref('hello world')
</script>