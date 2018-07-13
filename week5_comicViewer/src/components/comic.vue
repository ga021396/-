<template>
<div class="body">  
  <i class="fas fa-chevron-left dis" :class="{ left: LisActive }" @click="pre()"></i>
  <div class="imageZone">
      <img v-bind:src="page" />
  </div>
  <i class="fas fa-chevron-right dis" :class="{ right: RisActive }" @click="next()"></i>
</div>
</template>

<script>
function check(){
    var left = document.getElementsByClassName('left');
    //left.style.color = 'red';
    console.log(left);
}
    check();
export default {
  name:  'comic',
  data () {
    return {
      RisActive :true,
      LisActive :false,
      i:0,
      page:'/static/images/01.jpg',
      msg: 'Welcome to Your Vue.js App',
      img:[
        '/static/images/01.jpg',
        '/static/images/02.jpg',
        '/static/images/03.jpg',
        '/static/images/04.jpg',
        '/static/images/05.jpg'
      ]
    }
  },
  methods:{
      next:function(){
          if(this.i<this.img.length-1){
             this.i+=1
             return this.page=this.img[this.i];   
          }
      },
      pre:function(){
          if(this.i>0){
             this.i-=1
             return this.page=this.img[this.i];
          }
  }
 },
  watch: {
      i: function(val){
          if(this.i==0){
             this.LisActive=false;
          }
          else if(this.i==this.img.length-1)
              {
                this.RisActive=false;
              }
          else{
              this.LisActive=true;
              this.RisActive=true;
          }
        //console.log(123);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .body{
        width: 800px;
        height: 600px;
        margin: 20px auto;
        display: flex;
        align-content: center;
        justify-content: center;
        .dis{
            color:darkgray;
            height: 0;
            transform: translateY(260px);
            font-size: 80px;
        }
        .left,.right{
            height: 0;
            transform: translateY(260px);
            font-size: 80px;
            color: black;
        }
        .left:hover{
            cursor: pointer;
        }
        .right:hover{
            cursor: pointer;
        }
        .imageZone{
            color: white;
            margin: 8px;
            background: black;
            width: 450px;
            height: auto;
            margin-top: 0px;
        }
        img{
            margin-top: 0;
            width: 450px;
            height: auto;
            margin-bottom: 20px;
        }
    }
</style>
