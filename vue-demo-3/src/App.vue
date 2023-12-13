<template>
  <div id="app">
    <Demo1 v-if="visible === true"></Demo1>
    <button @click="toggle">toggle</button>
    <a-divider></a-divider>
    <watch-demo></watch-demo>
    <watch-deep-demo></watch-deep-demo>
    <compute-demo></compute-demo>
    <custom-directive></custom-directive> 
  </div>
</template>

<script>
import Demo1 from './components/Demo1.vue';
import WatchDemo from './components/WatchDemo.vue';
import WatchDeepDemo from './components/WatchDeepDemo.vue';
import Compute from './components/Compute.vue';
import CustomDirective from './components/CustomDirective.vue';
export default {
  name: 'App',
  components: {
    Demo1,
    WatchDemo,
    WatchDeepDemo,
    ComputeDemo: Compute,
    CustomDirective
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  },
  watch: {
    visible(newVal, oldVal) {
      if (!newVal) {
        console.log('Element is about to be removed by v-if');
      }
    }
  },
  beforeDestroy() {
    console.log('App is about to be destroyed');
  }

}
</script>