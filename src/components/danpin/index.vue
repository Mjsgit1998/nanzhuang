<template>
  <div class="danpin">
        <div class="home">
             <div class="topnav">
               <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed left-arrow @click-left="onClickLeft">
                   <template #right>
                        <van-icon color="white" name="ellipsis" size="18" />
                        </template>
                    </van-nav-bar>
            </div>
            <div style="height:46px"></div>
           <div :class="{rightmove:this.show==true}">
            <van-swipe class="my-swipe"   indicator-color="white">
                <van-swipe-item>
                     <van-image
                            width="100%"
                            height="100%"
                            fit="cover"
                        :src="require('../../assets/images/单品_02.jpg')"
                    />
                </van-swipe-item>
            </van-swipe>
            <!-- 商品评价 -->
           <div class="commit">
                <van-row>
                    <van-col span="8">商品评价(200)</van-col>
                </van-row>
                <!-- 评价人头像和名称 -->
                 <van-row  type="flex">
                    <van-col span="5">
                           <van-image
                                round
                                width="40px"
                                height="40px"
                                 fit="cover"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                    </van-col>
                    <van-col span="6">姓名</van-col>
                </van-row>
                <!-- 评价内容 -->
                 <van-row>
                   东西不错，下次一定
                </van-row>
                <!-- 评价图片 -->
                 <van-row>
                    <van-col span="6">
                        <van-image
                                width="100%"
                                height="100%"
                                 fit="contain"
                                 @click="zhe = true"
                               :src="require('../../assets/images/单品_02.jpg')"
                         />
                        <van-overlay :show="zhe" @click="zhe = false">
                            <div class="wrapper">
                                <div class="block" >
                                     <van-image
                                            width="100%"
                                            height="100%"
                                            fit="contain"
                                            @click="zhe = true"
                                        :src="require('../../assets/images/单品_02.jpg')"
                                        />
                                </div>
                            </div>
                        </van-overlay>
                    </van-col>
                </van-row>
                <!-- 评价星级 -->
                <van-row>
                    <van-col span='8'>产品质量：<van-rate v-model="value" color="blue"/></van-col>
                    <van-col span='8'>服务态度：<van-rate v-model="value" color="blue"/></van-col>
                    <van-col span='8'>尺寸合适：<van-rate v-model="value" color="blue"/></van-col>
                </van-row>
                <van-row  type="flex" justify="center">
                    <van-col span='8'>
                        <van-button round type="info"  size="normal" color="white" to="/evaluation"><span>查看全部评价</span></van-button>
                    </van-col>
                </van-row>
            </div>

             <div style="width:100%;height:20px;background-color:gray"></div>
             <!-- 单品详细资料 -->

                    <van-divider content-position="left"
                        :style="{ color: 'black', borderColor: 'gray', padding: '0 16px' ,margin:'10px'}"
                        >面料解析/Fabric
                    </van-divider>
                            <van-image
                            width="100%"
                            :src="require('../../assets/images/图文-01.jpg')"
                            />

            <div class="wenzi">
                <div>休闲型深灰色男士衬衫</div>
                <div>sportman leisuer suit</div>
                <div>$899.00</div>
            </div>
            <div class="shopcar"><van-button  @click="$router.push('/shopcar')" icon="cart" color="white" type="info"></van-button> </div>
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
                <!-- 点击收藏 -->
                 <div class="have">
                    <van-button
                    type="info"
                    icon="star-o"
                    size="large"
                    color="white"
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
        <van-row type="flex" @click="$router.push('/home')">
          <van-col span="3"><van-icon name="wap-home-o" size="30px" color="white" /></van-col>
          <van-col span="10"><span style="font-size:20px" >首页</span></van-col>
        </van-row>
         <van-row type="flex">
          <van-col span="3"> <van-icon name="manager-o" color="white" size="30px"/></van-col>
          <van-col span="10"><span style="font-size:20px">我的信息</span></van-col>
        </van-row>
         <van-row type="flex">
          <van-col span="3">  <van-icon name="orders-o" color="white" size="30px" /></van-col>
          <van-col span="10"><span style="font-size:20px">我的订单</span></van-col>
        </van-row>
         <van-row type="flex"  @click="$router.push('/shopcar')">
          <van-col span="3">   <van-icon name="cash-on-deliver" color="white" size="30px"/></van-col>
          <van-col span="12"><span style="font-size:20px">我的购物车</span></van-col>
        </van-row>
         <van-row type="flex">
          <van-col span="3">    <van-icon name="flower-o" color="white" size="30px" /></van-col>
          <van-col span="10"><span style="font-size:20px">我的尺寸</span></van-col>
        </van-row>
          <van-row type="flex">
          <van-col span="3">   <van-icon name="paid" color="white" size="30px" /></van-col>
          <van-col span="10"><span style="font-size:20px">我的钱包</span></van-col>
        </van-row>
          <van-row type="flex">
          <van-col span="3"> <van-icon name="star-o" color="white" size="30px"/></van-col>
          <van-col span="10"><span style="font-size:20px">我的收藏</span></van-col>
        </van-row>
          <van-row type="flex">
          <van-col span="3"> <van-icon name="location-o" color="white" size="30px"/></van-col>
          <van-col span="10"><span style="font-size:20px">我的地址</span></van-col>
        </van-row>
        <van-row type="flex">
            <van-col span="3"  @click="showPopup">
                  <van-icon name="peer-pay" color="white" size="30px"/>
            </van-col>
            <van-col span="10"><span style="font-size:20px"  @click="showPopup">返回</span></van-col>
        </van-row>
      </div>
  </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      zhe: false,
      value: 3
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
      this.$router.push('/home/shishang')
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

    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        // line-height: 150px;
        // text-align: center;
        // background-color: #39a9ed;
  }
  .wenzi{

      width: 100%;
      height: 120px;
      box-sizing: border-box;

    div{
        width: 100%;
        text-align: center;
        margin: 10px auto;
        font-size: 23px;
    }
    div:nth-child(3){
        color: red;
        font-size: 23px;
    }
  }
  .shopcar{

     position: fixed;
     right: 6%;
     bottom: 8%;
      .van-button{
          width: 80px;
          height: 80px;
          border-radius: 80px;
          box-shadow: 5px 5px  30px grey;
               .van-button__icon{
                   color: grey;
                   font-size: 40px;
               }
      }
  }
   .content{
      width: 100%;
      padding-top: 20px;
      padding: 20px;
      box-sizing: border-box;
        // background-color: black;

  }
   .rightmove{
    transform: translateX(80%);
  }

  .have{
      position: fixed;
      top: 10%;
      right: 30px;
      opacity: 0.2;
       .van-button__icon{
                   color: rgb(8, 8, 8);
                   font-size: 40px;
               }
  }
   .close{
    position: fixed;
    left: 30px;
    top:10%;
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

  .commit{
      margin: 5%;
      .van-row{
          margin-bottom: 2%;
      }
      .van-row:nth-child(3) .van-col{
          color: gray;
      }
      .van-row:nth-child(4) .van-col{
          border: 1px gray solid;
      }
    .van-row:nth-child(1){
        margin-bottom: 10%;
    }
      .van-row:last-child{
          text-align: center;
            margin-top:10%;
          span{
          color: rgb(240, 164, 164);
        }
      }
      .van-row:nth-child(2) .van-col:nth-child(2){
          line-height: 280%;
      }

  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 80%;
    height:80%;
    background-color: #fff;
  }
</style>
