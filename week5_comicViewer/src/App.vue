<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  name: 'App',
  components:{
      navbar
  }
}
</script>

<style>
#app {
padding: 0;
margin: 0;
}
</style>
