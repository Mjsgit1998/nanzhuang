<template>
  <div class="mysizenone">
       <div class="topnav">
               <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed left-arrow @click-left="onClickLeft">
                   <template #right>
                        <van-icon color="white" name="ellipsis" size="18" />
                        </template>
                    </van-nav-bar>
            </div>
     <div style="height:46px"></div>
      <div class="profile">
          <div class="photo">
              <img src="../../assets/photo.png" alt="">
          </div>
          <span>董大伟</span>
      </div>
      <van-grid :border="false" :column-num="3" :gutter="15" style="background:none">
        <van-grid-item @click="stature" @mouseleave="mouseLeave" @mouseover="mouseOver">
            <van-image :src="require('../../assets/my_stature.jpg')" />
            <span class="measure">身高</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="weight">
            <van-image :src="require('../../assets/my_weight.jpg')" />
            <span class="measure">体重</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="shoulder">
            <van-image :src="require('../../assets/my_shoulder.jpg')" />
            <span class="measure">肩宽</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="chest">
            <van-image :src="require('../../assets/my_chest.jpg')" />
            <span class="measure">胸围</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="waistline">
            <van-image :src="require('../../assets/my_waistline.jpg')" />
            <span class="measure">腰围</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="hip">
            <van-image :src="require('../../assets/my_hip.jpg')" />
            <span class="measure">臀围</span>
            <span class="size">-  -</span>
        </van-grid-item>
      </van-grid>
      <div class="btn" @click="measure">
          <van-button plain type="info" style="width:80%;">开始测量</van-button>
      </div>
      <!-- <div @click="onLogin" class="btn_1"></div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag: true,
      active: ''
    }
  },
  methods: {
    mouseOver () {
      // 这下你移
      console.log(this.active)
      this.active = 'display:none'
    },
    // 移出
    mouseLeave () {
      this.active = ''
      this.$refs.acp.style = ''
    },
    stature () {
      this.$router.push('/stature')
    },
    onClickLeft () {
      this.$router.push('/home')
    },

    weight () {
      this.$router.push('/weight')
    },
    shoulder () {
      this.$router.push('/myshoulder')
    },
    chest () {
      this.$router.push('/mychest')
    },
    waistline () {
      this.$router.push('/mywaistline')
    },
    hip () {
      this.$router.push('/myhip')
    },
    measure () {
      this.$router.push('/measurenone')
    },
    onLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.topnav{

              #nav{background-color: black; }
             /deep/.van-icon-arrow-left::before{color:#fff;}
            /deep/.van-icon-ellipsis::before{color:#fff;}
            /deep/.van-nav-bar__text{color:#fff!important;}
            /deep/.van-nav-bar__title{
                        color: white !important;
                        font-size: 20px;
                    }
  }
.a{
    background:none;
}
*{
    margin:0;
    padding:0;
}
.mysizenone{
    height:100vh;
    background:#f9f9f9;
}
/deep/ .van-grid-item__content--center{
    background:none !important;
}
.header{
    width:100%;
    height:88px;
    background: #1f1e24;
    position:fixed;
    z-index: 10;
}
.head{
    width:100%;
    height:88px;
}
.nav{
    position:relative;
    top: 42px;
    color:#fff;
}
/deep/ .van-ellipsis{
    color:#fff;
}
/deep/ .van-nav-bar__text{
    color:#fff;
}
/deep/ .van-nav-bar .van-icon{
    color:#fff;
}
/deep/ .van-image__img{
    width:50px;
    height:50px;
}
.profile{
    width:100%;
    height:140px;
    // border:1px solid #000;
    background: rgba(192, 192, 192, 0.75);
    display:flex;
    // justify-content: center;
    align-items: center;
}
.photo{
    width:80px;
    height:80px;
    background:#fff;
    border:3px solid #ccc;
    border-radius: 50%;
    box-shadow: 0 0 10px #808069;
    margin-left:25px;
    margin-right:15px;
    text-align: center;
    line-height: 90px;
    img{
        width:30px;

    }
}
.measure{
    margin:10px 0;
    color:#999999;
}
.size{
    /* color:#234497; */
    font-size: 20px;
}
.van-grid{
    margin-top:20px;
}
.btn{
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
    margin:30px 0;
}
.btn_1{
  width:20px;
  height:20px;
  background:red;
  border-radius: 50%;
}
</style>
