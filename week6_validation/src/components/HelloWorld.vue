<template>
<div class="container">
    <h1>Create Account</h1>
    <h2>Glad to see you here!</h2>
    <p>{{status}}</p>
    <div class="item">
         <p>*Account</p>
    <input type="text" class="input" placeholder="example@email.com" v-model="Account">
        <div class="ErrorTag">INVALID EMAIL</div>
    </div>
     <div class="item">
         <p>*Password</p>
    <input type="password" class="input" placeholder="●●●●●●●●" v-model="Password">
         <div class="ErrorTag">MINIMUM 8 CHARACTERS</div>
    </div>
     <div class="item">
         <p>*Comfirm Password</p>
    <input type="password" class="input" placeholder="●●●●●●●●" v-model="Confirm" disabled>
         <div class="ErrorTag">NOT MATCH</div>
    </div>
    <router-link to="/userDetail">
         <input type="button" value="Submit & Next" class="btn" disabled  v-on:click="click()">
    </router-link>
</div> 
</template>

<script>
    var AccountError;
    var PasswordError;
    var ComfirmError;
    var check;
    //---
    var EmailRule;
    var PasswordRule;
    var EmailOK;
    var PasswordOk;
    //--
    var EmailSucc;
    var PassWordSucc;
    var ConfirmSucc;
    var btn;
    //--
    var AccountInput;
    var PasswordInput;
    var ComfirmInput;
    //--
    var correctBorder;
    var errorBorder;
    
function dataLoad(){
    AccountError=document.getElementsByClassName('ErrorTag')[0];
    PasswordError=document.getElementsByClassName('ErrorTag')[1];
    ComfirmError=document.getElementsByClassName('ErrorTag')[2];
    btn=document.getElementsByClassName('btn')[0];
    AccountInput=document.getElementsByClassName('input')[0];
    PasswordInput=document.getElementsByClassName('input')[1];
    ComfirmInput=document.getElementsByClassName('input')[2];
    //--------
    EmailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    PasswordRule=/^[A-Za-z0-9]{8,16}$/;
    //--------
    EmailSucc=false;
    PassWordSucc=false;
    ConfirmSucc=false;
    //--------
    correctBorder='2px solid black';
    errorBorder='2px solid #F5A623';
    check=true;
}
    
function error(which,i){
    which.style.opacity=i;
}
function errorStyle(which,border){
    which.style.border=border;
}
    
function succ(){
    if(EmailSucc==true&&PassWordSucc==true&&ConfirmSucc==true)
        {   
            btn.style.background="#0275D8";
            btn.disabled=false;
            btn.onmouseover = function(){
            btn.style.cursor="pointer";
            };
        }
    else{
        btn.style.background="#BEE1FF";
        btn.disabled=true;
        btn.style.cursor="auto";
    }
}
   
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Account:'',
      Password:'',
      Confirm:'',
      check:true,
      Json:{}
    }
  },
  watch:{
      Account: function(account){
        EmailOK = account.search(EmailRule); 
        if(EmailOK!=0)
            {   
                errorStyle(AccountInput,errorBorder);
                error(AccountError,1);
                EmailSucc=false;
            }
          else{
                errorStyle(AccountInput,correctBorder);
                error(AccountError,0);
                EmailSucc=true;
          }
          succ();
            },
      Password: function(password){
        PasswordOk = password.search(PasswordRule); 
        if(PasswordOk!=0)
            {   
                errorStyle(PasswordInput,errorBorder);
                error(PasswordError,1);
                PassWordSucc=false;
                ComfirmInput.disabled=true;
                this.Confirm='';
            }
          else{
                errorStyle(PasswordInput,correctBorder);
                error(PasswordError,0);
                PassWordSucc=true;
                ComfirmInput.disabled=false;
          }
          succ();
            },
      Confirm: function(confirm){
        if(confirm!=this.Password)
            {
                errorStyle(ComfirmInput,errorBorder);
                error(ComfirmError,1);
                ConfirmSucc=false;
            }
          else{ 
                errorStyle(ComfirmInput,correctBorder);
                error(ComfirmError,0);
                ConfirmSucc=true;
          }
          succ();
            },
  },
 mounted:function(){
            dataLoad();
        },
 methods:{
     click:function(){
         let vm =this;
         vm.Json.Account=vm.Account;
         vm.Json.Password=vm.Password;
         vm.Json.check=vm.check;
         vm.$emit('push',vm.Json);
     }
 },
 props:['status']

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
        h2{ margin-top: 0;
            padding-top:0; 
            font-size: 24px;
            font-weight: 200;
            color: black;
        }
        .btn{
            width: 460px;
            height: 52px;
            border-radius: 5px;
            border: 0;
            box-sizing: border-box;
            background-color: #BEE1FF;
            color: white;
            font-size: 20px;
            line-height: 25px;
        }
    }
    .item{
        position: relative;
        width: 460px;
        margin-bottom: 24px;
        p{  
            font-size: 20px;
            text-align: left;
            margin: 0;
            padding: 0;
            padding-bottom: 8px;
        }
        .input{
            width: 460px;
            height: 52px;
            border-radius: 5px;
            box-sizing: border-box;
            border: 2px solid black;
            font-size: 20px;
            line-height: 25px;
            padding-left: 20px;
        }
    }
    .error{
        border: 2px solid #F5A623  !important;
    }
     .ErrorTag{
            opacity: 0;
            padding: 0 5px;
            line-height: 26px;
            background: #F5A623;
            border-radius: 4px;
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: center;
            width: auto;
            height: 26px;
            position: absolute;
            transform: translate(480px,-40px);
            &:before{
                content:'';
                height: 10px;
                width: 10px;
                background: #F5A623;
                position: absolute;
                display: block;
                transform: translate(-9px,8px) rotate(40deg);
                z-index: -1;
            }
        }
    .AccountError{
        opacity: 0;
    }
</style>
