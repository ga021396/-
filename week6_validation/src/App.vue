<template>
  <div id="app">
      <div class="box">
        <ul class="progressbar">
          <li class="active">Create Account</li>
          <li>General Infomation</li>
          <li>Confirm your data</li>
          <li>Congratulations</li>
        </ul>
      </div>
      <router-view @push="get" @pushDetail="getDetail" @pushConfirm="getConfirm" @pushReset="getReset" :showUser='Json' :showDetail="Detail"></router-view>
  </div>
</template>

<script>
    var li1;
    var li2;
    var li3;
    
function dataLoad(){
    li1 =document.getElementsByTagName('li')[1];
    li2 =document.getElementsByTagName('li')[2];
    li3 =document.getElementsByTagName('li')[3];
}
function addStyle(li){
    li.classList.add("active");
}
function rmStyle(){
    li1.classList.remove("active");
    li2.classList.remove("active");
    li3.classList.remove("active");
}
export default {
  name: 'App',
  data(){
    return{
        Json:{'check':'false'},
        Detail:{'check':'false'},
        Confirm:false,
        reset:false
    }  
  },
  methods:{
      get:function(account){
          let vm =this;
          vm.Json=account;
      },
      getDetail:function(data){
          let vm =this;
          vm.Detail=data;
      },
      getConfirm:function(data){
          let vm =this;
          vm.Confirm=data;
      },
       getReset:function(data){
          let vm =this;
          vm.reset=data;
      }
  },
  mounted:function(){
            dataLoad();
        },
  watch:{
      Confirm:function(){
          if(this.Confirm==true)
              {
                    addStyle(li3);   
              }
            },
      Json:function(){
          if(this.Json.check==true)
              {
                    addStyle(li1);   
              }
    },
      Detail:function(){
          if(this.Detail.check==true)
              {
                    addStyle(li2);   
              }
 },
      reset:function(){
          if(this.reset==true)
              {     
                    rmStyle();
                    this.reset=false;
              }
      }
  }
}
</script>

<style  lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box{
      text-align: center;
      width: 600px;
      margin:0 auto;
      padding-top: 20px;
      padding-bottom:40px;
      transform: translateX(-20px);
  }
  .progressbar {
      counter-reset: step;
  }
  .progressbar li {
      list-style-type: none;
      width: 25%;
      float: left;
      font-size: 12px;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      color: #7d7d7d;
  }
  .progressbar li:before {
      width: 30px;
      height: 30px;
      content: counter(step);
      counter-increment: step;
      line-height: 30px;
      border: 2px solid #7d7d7d;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
  }
  .progressbar li:after {
      width: 100%;
      height: 2px;
      content: '';
      position: absolute;
      background-color: #7d7d7d;
      top: 15px;
      left: -50%;
      z-index: -1;
  }
  .progressbar li:first-child:after {
      content: none;
  }
  .progressbar li.active {
      color: #0275D8;
  }
  .progressbar li.active:before {
      border-color:#0275D8;
  }
  .progressbar li.active + li:after {
      background-color: #0275D8;
    }
</style>
