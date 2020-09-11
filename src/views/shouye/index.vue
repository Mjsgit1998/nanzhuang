<template>
<div class="app">

  <div class="home" >
      <div class="topnav">
               <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed left-arrow @click-left="onClickLeft">
                   <template #right>
                        <van-icon color="white" name="ellipsis" size="18" />
                        </template>
                    </van-nav-bar>
            </div>
     <div style="height:46px"></div>

     <div :class="{rightmove:this.show==true}">
         <!-- 中间的轮播图 -->
    <van-swipe class="my-swipe"  indicator-color="white"  :height="339">
        <van-swipe-item>
            <van-image
                width="100%"
                height="100%"
                fit="fill"
                :src="require('../../assets/images/首页_01.jpg')"
                />
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 中间的图片 -->
    <div v-for="item in imgs" :key="item.Id" @click="$router.push('/home/'+item.Id)">
             <van-image
                width="100%"
                height="100%"
                fit="fill"
               :src=item.image
                />
    </div>

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
  <!-- //左侧导航栏 -->
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
import { Dialog, Toast, Loading } from 'vant'

import Vue from 'vue'

Vue.use(Loading)
Vue.use(Toast)
export default {
  data () {
    return {
      show: false,
      imgs: []
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  created () {
    // this.loading()
    this.onloadimg()
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
      Dialog.confirm({
        title: '返回登录',
        message: '确认返回吗'
      })
        .then(() => {
          // on confirm
          Toast.success('退出成功')
          this.$router.push('/login')
        })
        .catch(() => {
          // on cancel
        })
    },
    onClickRight () {
      // Toast('按钮')
    },
    onloadimg () {
      // const tokenn = window.localStorage.getItem('token')
      // console.log(tokenn)
      this.$axios({
        method: 'get',
        url: 'http://fu.yimentu.com/bilang/api.php/index/index'
        // data: {},
        // headers: {
        //   token: tokenn
        // }
      }).then(res => {
        console.log(res)
        this.imgs = res.data.data
        this.imgs.shift(0)
        console.log(this.imgs)
        // if (res.data === 404) {
        //   Toast.success('登录超时,请重新登录')
        //   this.$router.push('/login')
        // }
      })
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
   .my-swipe{
       margin-bottom: 10px;
       width: 100%;
   }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;

  }
  .demo5{
      margin-bottom: 10px;
  }
  .close{
    position: fixed;
    left: 30px;
   bottom: 20%;
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
          // margin-top: 20px;
          overflow: hidden;
          span{
            margin-left: 10%;
          }
        }
  }
</style>
