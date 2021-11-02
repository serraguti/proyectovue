<template>
  <div id="app">
    <Menu/>
    <hr/>
    <router-view></router-view>
    <hr/>
  </div>
</template>

<script>
import Menu from './components/navegacion/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  }
}
</script>

<style>
@import './assets/css/estilosvue.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
