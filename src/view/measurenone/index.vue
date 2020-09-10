<template>
  <div class="measurenone">
      <div class="topnav">
               <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed left-arrow @click-left="onClickLeft">
                   <template #right>
                        <van-icon color="white" name="ellipsis" size="18" />
                        </template>
                    </van-nav-bar>
            </div>
     <div style="height:46px"></div>
      <van-grid :border="false" :column-num="3" :gutter="10">
        <van-grid-item @click="stature">
            <van-image :src="require('../../assets/leader.png')" />
            <span class="measure">领围</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="chest">
            <van-image :src="require('../../assets/neck_line_03.png')" />
            <span class="measure">胸围</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="waistline">
            <van-image :src="require('../../assets/waistline_03.png')" />
            <span class="measure">腰围</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="shoulder">
            <van-image :src="require('../../assets/shoulder_03.png')" />
            <span class="measure">肩宽</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="outside">
            <van-image :src="require('../../assets/outside_03.png')" />
            <span class="measure">袖长</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="clothes">
            <van-image :src="require('../../assets/clothes_length_03.png')" />
            <span class="measure">衣长</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="sleeve">
            <van-image :src="require('../../assets/sleeve_width_03.png')" />
            <span class="measure">袖肥</span>
            <span class="size">-  -</span>
        </van-grid-item>
        <van-grid-item @click="cuff">
            <van-image :src="require('../../assets/cuff_03.png')" />
            <span class="measure">袖口</span>
            <span class="size">-  -</span>
        </van-grid-item>
      </van-grid>
      <div class="btn">
          <van-button plain type="info" to="/neck" style="width:80%;">开始测量</van-button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    stature () {
      this.$router.push('/neck')
    },
    chest () {
      this.$router.push('/chest')
    },
    shoulder () {
      this.$router.push('/shoulder')
    },
    waistline () {
      this.$router.push('/waistline')
    },
    measure () {
      this.$router.push('/stature')
    },
    outside () {
      this.$router.push('/outside')
    },
    clothes () {
      this.$router.push('/clothes')
    },
    sleeve () {
      this.$router.push('/sleeve')
    },
    cuff () {
      this.$router.push('/cuff')
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
*{
    margin:0;
    padding:0;
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
/deep/ .van-image__img{
    width:50px;
    height:50px;
}
.btn{
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
    margin:30px 0;
}
</style>
