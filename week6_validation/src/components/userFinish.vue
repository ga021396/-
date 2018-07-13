<template>
<div class="container">
    <h1>Congratulations</h1>
    <h2>Now you’re one of us! </h2>
    <i class="fas fa-smile"></i>
    <p>Redirected to homepage after 5 seconds…</p>
</div> 
</template>

<script>
export default {
  name: 'userFinish',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .container{
        margin: 0 auto;
        padding: 0 auto;
        width: 460px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        h1{ 
            margin-bottom: 0;
            padding-bottom:0; 
            font-size: 48px;
            font-weight: 200;
            color: black;
        }
        h2{ 
            margin-top: 0;
            padding-top:0; 
            font-size: 24px;
            font-weight: 200;
            color: black;
        }
        i{
            font-size: 230px;
            height: 230px;
            width: 230px;
            color: #BEE1FF;
        }
        p{
            color:#0275D8;
     }
    }
</style>
