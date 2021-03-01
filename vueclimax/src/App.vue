<template>
  <div id="app">
    <div class="container">
      <ClimbHeader/>
    </div>
    <div class="container">
      <router-view />
    </div>
    <div class="container">
      <ClimbFooter/>
    </div>
  </div>
</template>

<script>
  import ClimbHeader from './components/ClimbHeader.vue'
  import ClimbFooter from './components/ClimbFooter.vue'

  export default {
    name: 'App',
    components: {
      ClimbHeader,
      ClimbFooter
    }
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
