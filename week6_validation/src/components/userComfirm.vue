<template>
  <div class="container">
    <h1>Confirm your data!</h1>
    <h2>the last step!</h2>
    <div class="item">
         <div class="title">Account</div><div class="value">{{showUser.Account}}</div>
    </div>
    <div class="item">
         <div class="title">Password</div><div class="value">********</div>
    </div>
    <div class="item">
         <div class="title">Name</div><div class="value">{{showDetail.userName}}</div>
    </div>
    <div class="item">
        <div class="title">Phone</div><div class="value">{{showDetail.userPhone}}</div>
    </div>
    <div class="item">
        <div class="title">Birth Day</div><div class="value">{{showDetail.BirthDate}}</div>
    </div>
    <div class="item">
        <div class="title">Address</div><div class="value">{{showDetail.cityValue
}}-{{showDetail.distValue}}-{{showDetail.Address}}</div>
    </div>
    <router-link to="/">
         <input type="button" value="Reset Data" class="reset" v-on:click="resetData()">
    </router-link>
    <router-link to="/userFinish">
         <input type="button" value="Submit & Next" class="btn" v-on:click="click()">
    </router-link>
</div> 
</template>

<script>
export default {
  name: 'userPayment',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      check:true,
      reset:true
    }
  },
  props:['showUser','showDetail'],
  methods:{
     click:function(){
         let vm =this;
         vm.$emit('pushConfirm',vm.check);
    },
      resetData:function(){
         let vm =this;
         vm.$emit('pushReset',vm.reset);
    }
  }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container{
        margin-top: 0;
        padding-top: 0;
        display: inline-block;
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
        .btn{
            margin: 0 20px;
            width: 190px;
            height: 52px;
            border-radius: 5px;
            border: 0;
            box-sizing: border-box;
            background-color: #0275D8;
            color: white;
            font-size: 20px;
            line-height: 25px;
            &:hover{
                transition: all 0.5s;
                background-color: lighten(#0275D8,15%);
            }
        }
        .reset{
            margin:0 20px;
            margin-bottom: 20px;
            width: 190px;
            height: 52px;
            border-radius: 5px;
            border: 0;
            box-sizing: border-box;
            background-color: #dddddd ;
            color: white;
            font-size: 20px;
            line-height: 25px;
            &:hover{
                transition: all 0.5s;
                background-color: red ;
            }
        }
    }
    .item{
        margin: 0 auto;
        position: relative;
        width: 460px;
        margin-bottom: 24px;
        display: flex;
        text-align: left;
        .title{
            text-align: center;
            font-size: 20px;
            line-height: 52px;
            height: 52px;
            border-radius: 5px;
            padding: 2px;
            border:2px solid black;
            box-sizing: border-box;
            width: 25%;
        }
        .value{
            font-size: 20px;
            line-height: 52px;
            height: 52px;
            border-radius: 5px;
            padding: 2px;
            border:2px solid black;
            box-sizing: border-box;
            width: 75%;
            padding-left: 10px;
        }
    }
</style>
