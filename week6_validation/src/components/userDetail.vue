<template>
  <div class="container">
    <h1>General Infomation</h1>
    <h2>Tell us who you are!</h2>
    <div class="item" style="margin-right:20px">
         <p>Name</p>
    <input type="text" class="input" placeholder="Example Name" v-model="userName">
    </div>
     <div class="item">
         <p>*Phone</p>
    <input type="text" class="input" placeholder="0912 345 678" v-model="userPhone">
          <div class="ErrorTag">NUMBERS ONLY</div>
    </div>
    <div class="item">
         <p>Birth Date </p>
    <input type="date" class="input" style="width:460px" v-model="BirthDate">
    </div>
    <div class="item">
        <p>*Address</p>
        <select name="travel-form" class="sel "style="margin-right:16px" v-model="cityValue">
            <option value="" disabled selected>Select your contry</option>
            <option value="Japan ">Japan</option>
            <option value="Korea">Korea</option>
            <option value="Europe ">Europe</option>
            <option value="China ">China</option>
        </select>
        <select name="travel-form" class="sel" v-model="distValue">
            <option value="" disabled selected>Select your dist</option>
            <option value="Osaka ">Osaka</option>
            <option value="Kubinanji">Kubinanji</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Beijing ">Beijing</option>
        </select>
        <input type="text" class="input" placeholder="Address Detail" style="width:460px;" v-model="Address" disabled>
        <div class="ErrorTag" style="transform: translate(480px,-40px);">REQUIRED FILED</div>
    </div>
     <router-link to="/userComfirm">
         <input type="button" value="Submit & Next" class="btn" disabled  v-on:click="click()">
    </router-link>
</div> 
</template>

<script>
    var name;
    var Number;
    var BDay;
    var Addr;
    var btn;
    //---
    var NumError;
    var AddError;
    //--
    var city;
    var dist;
    //--
    var NumRule;
    var PhoneOK;
    var AddRule;
    var AddOK;
    //---
    var correctBorder;
    var errorBorder;
    //---
    var NumSucc;
    var AddSucc;

function dataLoad(){
        name=document.getElementsByClassName('input')[0];
        Number=document.getElementsByClassName('input')[1];
        BDay=document.getElementsByClassName('input')[2];
        Addr=document.getElementsByClassName('input')[3];
        btn=document.getElementsByClassName('btn')[0];
    //---
        NumError=document.getElementsByClassName('ErrorTag')[0];
        AddError=document.getElementsByClassName('ErrorTag')[1];
    //---
        city=document.getElementsByClassName('sel')[0];
        dist=document.getElementsByClassName('sel')[1];
    //---
        NumRule=/^[0-9]{10}$/;
        correctBorder='2px solid black';
        errorBorder='2px solid #F5A623';
    //---
        NumSucc=false;
        AddSucc=false;
    }
function error(which,i){
    which.style.opacity=i;
}
function errorStyle(which,border){
    which.style.border=border;
}
function succ(){
    if(AddSucc==true&&NumSucc==true)
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
  name: 'userDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName:'',
      userPhone:'',
      BirthDate:'',
      Address:'',
      cityValue:'',
      distValue:'',
      check:true,
      Detail:{}
    }
  },
  watch:{
          userPhone: function(userphone){
            PhoneOK = userphone.search(NumRule);
              if(PhoneOK!=0)
                  {   NumSucc=false;  
                      error(NumError,1);
                      errorStyle(Number,errorBorder);
                  }
              else
              {
                NumSucc=true;  
                error(NumError,0);     
                errorStyle(Number,correctBorder);  
              }
              succ();
          },
          Address:function(add){
              if(add==''){
                  AddSucc=false;
                  error(AddError,1);
                  errorStyle(Addr,errorBorder);
              }
              else{
                  AddSucc=true;
                  error(AddError,0);
                  errorStyle(Addr,correctBorder);
              }
              succ();
          },
          cityValue:function(city){
              if(city!=''&&this.distValue!=''){
                Addr.disabled=false;      
              }
          },
          distValue:function(dist){
               if(dist!=''&&this.cityValue!=''){
                Addr.disabled=false;      
              }
          }
    },
mounted:function(){
            dataLoad();
        },
methods:{
    change:function(){

    },
    click:function(){
         let vm =this;
         vm.Detail.userName=vm.userName;
         vm.Detail.userPhone=vm.userPhone;
         vm.Detail.Address=vm.Address;
         vm.Detail.cityValue=vm.cityValue;
         vm.Detail.distValue=vm.distValue;
         vm.Detail.BirthDate=vm.BirthDate;
         vm.Detail.check=vm.check;
         vm.$emit('pushDetail',vm.Detail);
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
        float: left;
        margin-bottom: 24px;
        p{  
            font-size: 20px;
            text-align: left;
            margin: 0;
            padding: 0;
            padding-bottom: 8px;
        }
        .input{
            width: 220px;
            height: 52px;
            border-radius: 5px;
            box-sizing: border-box;
            border: 2px solid black;
            font-size: 20px;
            line-height: 25px;
            padding-left: 20px;
        }
    }
    .sel{
            width: 220px;
            height: 52px;
            border-radius: 5px;
            box-sizing: border-box;
            border: 2px solid black;
            font-size: 20px;
            line-height: 25px;
            padding-left: 20px;
            margin-bottom: 8px;
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
            transform: translate(240px,-40px);
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
</style>
