<template>
  <div id="app">
    <basic-module></basic-module>
    <hr>
    <h1>父组件：{{ message }}</h1>
    <child-module :msg="message" :person="person" v-model:msg="message" class="child"></child-module>
    <hr>
    <!-- <slot-module type="big">传递大按钮</slot-module>
    <slot-module type="small"></slot-module>
    <slot-module>
      <template v-slot:header> <h1>这里插入header</h1> </template>
      <template #content> <h1>这里插入content</h1> </template>
      <template #footer> <h1>这里插入footer</h1> </template>
    </slot-module> -->
    <slot-module v-slot="props">
      {{ props.text }} 
      {{ props.count }}
    </slot-module>
    <slot-module v-slot="{text, count}">
      {{ text }} 
      {{ count }}
    </slot-module>
  </div>
</template>

<script>
import BasicModule from './components/BasicModule.vue';
import ChildModule from './components/ChildModule.vue';
import SlotModule from './components/SlotModule.vue';
export default {
  name: 'App',
  components:{
    BasicModule,
    ChildModule,
    SlotModule
  },
  data(){
    return {
      count: 0,
      message: '这是来自app.vue的信息',
      person:{
        name:'张三',
        age:18
      }
    }
  },
  methods:{
    handleChildClick(){
      this.count++;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
