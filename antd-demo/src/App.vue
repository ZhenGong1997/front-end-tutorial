<template>
  <div id="app">
    <Buttons></Buttons>
    <Layout></Layout>
    <Space></Space>
    <my-form></my-form>
    <hr>
    <my-form2></my-form2>
    <hr>
    <my-form3></my-form3>
    <hr>
    <my-form4></my-form4>
    <hr>
    <my-form5></my-form5>
    <hr>
    <my-form6></my-form6>
    <hr>
    <my-form7></my-form7>
  </div>
</template>
<script>

import Buttons from './components/Buttons.vue';
import Layout from './components/Layout.vue';
import Space from './components/Spaces.vue';
import MyForm from './components/MyForm.vue';
import MyForm2 from './components/MyForm2.vue';
import MyForm3 from './components/MyForm3.vue';
import MyForm4 from './components/MyForm4.vue';
import MyForm5 from './components/MyForm5.vue';
import MyForm6 from './components/MyForm6.vue';
import MyForm7 from './components/MyForm7.vue';
export default {
  name: 'App',
  components: {
    Buttons,
    Layout,
    Space,
    MyForm,
    MyForm2,
    MyForm3,
    MyForm4,
    MyForm5,
    MyForm6,
    MyForm7,
  },
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
