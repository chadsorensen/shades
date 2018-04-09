<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
export default {
  name: 'App',
  components: { Navigation }
}
</script>

<style lang="scss">
   @import 'assets/scss/application.scss'
</style>
