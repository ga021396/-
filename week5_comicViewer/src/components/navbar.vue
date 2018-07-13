<template>
  <div class="nav">
    <h1><router-link to="/" class="router">Comicomic</router-link></h1>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav{
    padding: 0;
    margin: 0;
    height: 74px;
    width: 100%;
    text-align: center;
    background-color: black;
    color: #50FF44;
    line-height: 74px;
    h1{ 
        font-style: italic;
        padding: 0;
        margin: 0;
        font-size: 36px
    }
    .router{
     text-decoration: none;
     color: #50FF44;
    }
}
</style>
