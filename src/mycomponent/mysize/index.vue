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
          <div class="anew">
            <div class="pic_new" @click="angin">
              <img src="../../assets/pen.png" alt="">
              <span>重新测量</span>
            </div>
          </div>
      </div>
      <van-grid :border="false" :column-num="3" :gutter="15" style="background:none">
        <van-grid-item @click="stature">
            <van-image :src="require('../../assets/my_stature.jpg')" />
            <span class="measure">身高</span>
            <span class="size">180 <span class="unit">cm</span></span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/my_weight.jpg')" />
            <span class="measure">体重</span>
            <span class="size">176 <span class="unit">kg</span></span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/my_shoulder.jpg')" />
            <span class="measure">肩宽</span>
            <span class="size">91.6 <span class="unit">cm</span></span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/my_chest.jpg')" />
            <span class="measure">胸围</span>
            <span class="size">86.5 <span class="unit">cm</span></span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/my_waistline.jpg')" />
            <span class="measure">腰围</span>
            <span class="size">33.6 <span class="unit">cm</span></span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/my_hip.jpg')" />
            <span class="measure">臀围</span>
            <span class="size">91.6 <span class="unit">cm</span></span>
        </van-grid-item>
      </van-grid>
      <div class="analyze">
         <p class="bodily">体型分析</p>
         <p class="result">健美型身材。肩很宽、很厚、结实、健壮，腰明显较<br>细，大腿部的肌肉很发达。</p>
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
      this.$router.push('/stature')
    },
    angin () {
      this.$router.push('/mysizenone')
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
    overflow: hidden;
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
    color:#234497;
    font-size: 20px;
}
.unit{
  font-size:16px ;
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
.anew{
  width:200px;
  height:162%;
  background:#fff;
  position:relative;
  top:0;
  left:20%;
  overflow: hidden;
  border-radius: 50% 0 0 50%;
  color:#1296db;
  .pic_new{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:41%;
    margin-left:-23%;
  }
}
.result{
  color:#999999;
  font-size: 14px;
  margin-top:10px;
}
.analyze{
  padding-top:20px;
  padding-left:26px;
  padding-right:26px;
}
.btn{
  width:20px;
  height:20px;
  background:green;
  border-radius: 50%;
}
</style>
