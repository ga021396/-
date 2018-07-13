<template>
<div class="body">
    <div class="main">
        <div class="main-img">
            <img src="https://upload.cc/i1/2018/07/03/Ebutzs.png">
        </div>
        <div class="introduction">
            <h1>MY HEXSCHOOL</h1>
            <div>
                <div class="tag">Geners</div>
                <div class="content">Fusce/vehicula/dolor</div>
            </div>
            <div>
                <div class="tag">Author</div>
                <div class="content">Namae Shiranai</div>
            </div>
            <div>
                <div class="tag">Status</div>
                <div class="content">Ongoing</div>
            </div>
            <div>
                <div class="tag">Rate</div>
                <div class="content">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
            <div class="sum">Summary</div>
            <p>If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. </p>
            <p>Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.</p>
        </div>
    </div>
    <h1 class="all-tag">All Chapters</h1>
    <div class="chapters">
        <p><router-link to="/" class="router">Chapter 1</router-link> : The F2E Challenge Start!</p>
        <p><router-link to="/comic" class="router">Chapter 2</router-link> : Todo List is Going Crazy!<label class="new">New</label></p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  prop:{
      src:{
          type:String,
          required:false
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$img:url(https://upload.cc/i1/2018/07/03/Ebutzs.png);
.router{
        text-decoration: none;
        background-color: black;
        color: white;
        border-radius: 5px;
        padding: 2px 2px;
    }
.nav{
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
}
.body{
    height: auto;
    width: 620px;
    margin: 32px auto;
}
.main{
    display: flex;
}
.main-img{
    width: 292px;
    border: 4px solid black;
    img{
        width: 292px;
        height: 438px;
    }
}
.introduction{
    h1{ 
        margin: 0;
        padding: auto 8px;
        background-color: black;
        color: white;
        font-size: 36px;
        text-align: center;
    }
    p{
      margin-left: 20px;
      padding-bottom: 16px; 
    }
    .content{
        width: 220px;
        float: left;
        margin:8px auto;

    }
    .tag{
        float: left;
        width: 52px;
        font-weight: 700;
        margin:8px 20px;
    }
    .sum{
        clear: both;
        position: relative;
        font-weight: 700;
        padding-top:24px;
        padding-left: 20px;
    }
}
.chapters{
    text-align: left;
    border: 4px solid black;
    box-sizing: border-box;
    width: 620px;
    p{
        padding-left: 24px;
        font-weight: 700;
    }
    .new{
        margin-left: 24px;
        background-color: #50FF44;
        color: black;
        padding-right: 5px;
        padding-left: 5px;
        border-radius: 5px;
    }
}
.all-tag{
    margin: 0;
    margin-top: 28px;
    background-color: black;
    color: white;
    font-size: 24px;
    line-height: 44px;
    text-align: center;
    width:181px;
    height: 44px;
}
</style>
