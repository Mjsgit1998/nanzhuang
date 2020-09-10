<template>
<div class="shishang">
 <div class="home" >

        <div class="topnav">
               <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed  left-arrow @click-left="onClickLeft">
                   <template #right>
                        <van-icon color="white" name="ellipsis" size="18" />
                        </template>
                    </van-nav-bar>
            </div>
     <div style="height:46px"></div>
     <div class="content" :class="{rightmove:this.show==true}">
     <van-row  justify="space-around" gutter="15">
        <van-col span="12">
            <van-image
                fit="fill"
              width="100%"
                height="100%"
                 @click="$router.push('/home/shishang/id')"
             :src="require('../../assets/images/时尚_01.jpg')"
            />
        </van-col>
        <van-col span="12" >
             <van-image
              width="100%"
             :src="require('../../assets/images/时尚精选_03.jpg')"
            />
        </van-col>
         <van-col span="12" >
             <van-image
              width="100%"
             :src="require('../../assets/images/时尚精选_03.jpg')"
            />
        </van-col>
         <van-col span="12" >
             <van-image
              width="100%"
             :src="require('../../assets/images/时尚精选_03.jpg')"
            />
        </van-col>
         <van-col span="12" >
             <van-image
              width="100%"
             :src="require('../../assets/images/时尚精选_03.jpg')"
            />
        </van-col>
         <van-col span="12" >
             <van-image
              width="100%"
             :src="require('../../assets/images/时尚精选_03.jpg')"
            />
        </van-col>
         <van-col span="12" >
             <van-image
              width="100%"
             :src="require('../../assets/images/时尚精选_03.jpg')"
            />
        </van-col>

    </van-row>
    <!-- 点击开启或关闭左侧导航栏 -->
    <div class="close">
        <van-button
        type="info"
         @click="showPopup"
          icon="wap-nav"
         size="large"
          color="rgb(66,69,76)"
          >
          </van-button>
     </div>
    </div>
 </div>
  <van-popup v-model="show"  position="left" :overlay="false" id="abc" :style="{width:'80%',height:'100%'}" >

      <div style="width:100%" class="bbb">
          <van-image
              round
              width="50px"
              height="50px"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <van-button type="default" color="rgb(56,66,102)" style="margin-left:10%">名称</van-button>

      </div>
       <div class="ccc">
        <van-row type="flex"    @click="showPopup">
          <van-col span="3"><van-icon name="wap-home-o" size="30px" color="white" /></van-col>
          <van-col span="10"><span style="font-size:20px" >首页</span></van-col>
        </van-row>
         <van-row type="flex">
          <van-col span="3"> <van-icon name="manager-o" color="white" size="30px"/></van-col>
          <van-col span="10"><span style="font-size:20px">我的信息</span></van-col>
        </van-row>
         <van-row type="flex" @click="$router.push('/order')">
          <van-col span="3">  <van-icon name="orders-o" color="white" size="30px" /></van-col>
          <van-col span="10"><span style="font-size:20px">我的订单</span></van-col>
        </van-row>
         <van-row type="flex" @click="$router.push('/shopcar')">
          <van-col span="3">   <van-icon name="cash-on-deliver" color="white" size="30px"/></van-col>
          <van-col span="12"><span style="font-size:20px">我的购物车</span></van-col>
        </van-row>
         <van-row type="flex" @click="$router.push('/mysizenone')">
          <van-col span="3">    <van-icon name="flower-o" color="white" size="30px" /></van-col>
          <van-col span="10"><span style="font-size:20px">我的尺寸</span></van-col>
        </van-row>
          <van-row type="flex" @click="$router.push('/money')">
          <van-col span="3">   <van-icon name="paid" color="white" size="30px" /></van-col>
          <van-col span="10"><span style="font-size:20px">我的钱包</span></van-col>
        </van-row>
          <van-row type="flex">
          <van-col span="3"> <van-icon name="star-o" color="white" size="30px"/></van-col>
          <van-col span="10"><span style="font-size:20px">我的收藏</span></van-col>
        </van-row>
          <van-row type="flex" @click="$router.push('/location')">
          <van-col span="3"> <van-icon name="location-o" color="white" size="30px"/></van-col>
          <van-col span="10"><span style="font-size:20px">我的地址</span></van-col>
        </van-row>
        <van-row type="flex">
            <van-col span="3"  @click="showPopup">
                  <van-icon name="peer-pay" color="white" size="30px"/>
            </van-col>
            <van-col span="10"  @click="showPopup"><span style="font-size:20px">返回</span></van-col>
        </van-row>
      </div>
  </van-popup>
  </div>
</template>

<script>

export default {
  data () {
    return {
      show: false
    }
  },
  methods: {

    showPopup () {
      if (this.show === false) {
        this.show = true
      } else {
        this.show = false
      }
    },
    onClickLeft () {
      // Toast('返回')
      this.$router.push('/home')
    },
    onClickRight () {
    //   Toast('按钮')
    }
  }
}
</script>

<style lang="less" scoped>
 *{
       margin: 0;
      padding: 0;
   }
   body{
        max-width: 750px;
       min-width: 375px;
       margin: 0 auto;
   }
   .home{
       width: 100%;
       height: 100%;
      overflow: hidden;
   }
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
  .content{
      width: 100%;
      padding-top: 20px;
      padding: 20px;
      box-sizing: border-box;
        // background-color: black;

  }
  .close{
    position: fixed;
    left: 30px;
    top: 80%;
  }
  .rightmove{
    transform: translateX(80%);
  }
  .close{
    .van-button{
      width: 40px;
      height:40px;
      border-radius: 40px;
    }
  }
  #abc{
      // top: 50%;
      // margin-top:128px;
        background-color: rgb(56,66,102);
        margin-top: 46px;
    // overflow: hidden;
  }
  .bbb{
    box-sizing: border-box;
    background-color: rgb(56,66,102);
    padding-left: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    border-bottom: white 1px solid;
  }
  .ccc{

     padding-left: 10%;
    width: 100%;
    height: 100%;
     box-sizing: border-box;
    margin-top: 20px;
    background-color: rgb(56,66,102);
        .van-row{
          margin-bottom: 20px;
          span{
            color: white;
          }
        }
        .van-row:last-child{
          margin-top: 20px;
          overflow: hidden;
          span{
            margin-left: 10%;
          }
        }
  }
</style>
