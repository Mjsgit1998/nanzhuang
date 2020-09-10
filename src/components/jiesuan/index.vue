<template>
  <div class="jeisuan">
         <div class="topnav">
                <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed left-arrow @click-left="onClickLeft">
                    <template #right>
                            <van-icon color="white" name="ellipsis" size="18" />
                            </template>
              </van-nav-bar>
        </div>
        <div style="height:46px"></div>
        <!-- 联系人信息 -->
        <van-row  class="massage" type="flex" align="center" justify="space-around">
            <van-col span="1"><van-icon name="location-o" size="20px" /></van-col>
            <van-col span="22">
                <span >李先生</span>
                <span>13911111111</span><br>
                <span style="color:gray">广东省佛山市禅城区印象购物中心5号楼1902室</span>
            </van-col>
        </van-row>
        <!-- 预计发送时间 -->
         <van-row class="time" type="flex" align="center" justify="center">
             <van-col span="1"><div style="width:10px;height:10px;border:1px solid;border-radius:5px;background-color:red"></div></van-col>
             <van-col span="20"> 您定制的商品预计于 2020年04月15日寄出</van-col>
        </van-row>
        <!-- 图片预览 -->
        <van-row class="tu" type="flex" align="center" justify="space-around">
                  <van-col span="4">
                      <van-image
                            width="100%"
                            height="120px"
                            fit="cover"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                   </van-col>
                  <van-col span="4">
                       <van-image
                            width="100%"
                            height="120px"
                            fit="cover"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                  </van-col>
                  <van-col span="4">
                         <van-image
                            width="100%"
                            height="120px"
                            fit="cover"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                 </van-col>
                  <van-col span="4"> <van-icon name="ellipsis" size="40px" color="gray"/></van-col>
                  <van-col span="4"><span>共6件</span> <van-icon name="arrow" /></van-col>
        </van-row>
        <!-- 测量尺寸 -->
        <van-row class="tu2" type="flex" align="center" justify="space-around">
            <van-col span="18"><span>测量尺寸</span></van-col>
            <van-col span="2" ><van-icon name="arrow" /></van-col>
        </van-row>
         <van-row class="tu tt" type="flex" align="center" justify="space-around">
                <van-col span="7"><span>支付及配送</span></van-col>
                <van-col span='16'>
                    <span>微信支付</span><br>
                    <span>快递</span><br>
                    <span style="color:gray">工作日、双休日与节假日均可送货</span>
                </van-col>
        </van-row>
        <!-- 优惠券选择 -->
        <van-row class="you" type="flex" align="center" justify="space-around">
            <van-col span="18">优惠券抵扣</van-col>
            <van-col span="2"><van-switch v-model="checked" size="24px"  inactive-color="gray" active-color="#07c160" /></van-col>
        </van-row>
        <van-row class="you bei" type="flex" align="center" justify="space-between">
            <van-col >备注留言</van-col>
        </van-row>
        <van-row  class="you jin" type="flex" align="center" justify="space-around">
            <van-col span="17">
                <span>商品金额</span><br>
                <span>优惠卷抵扣</span>
            </van-col>
            <van-col span="6">
                <span>￥6000.00</span><br>
                <span>-￥0.00</span>
            </van-col>
        </van-row>
       <van-submit-bar :price="3050" label="实付款" button-text="提交订单" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    }
  },
  methods: {
    onClickLeft () {
      // Toast('返回')
      this.$router.go(-1)
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
    .massage{
         width: 100%;
            height:87px;
    }
        .time{
            width: 100%;
            height:87px;
            background-color: rgb(218, 214, 214);
            color: gray;
        }
        .tu{
            width: 100%;
            height: 180px;
            border-bottom: 1px rgb(204, 201, 201) solid;
        }
         .tu2{
            width: 100%;
            height: 130px;
            border-bottom: 1px rgb(204, 201, 201) solid;
        }
        .tt{
            .van-col:nth-child(2){
                text-align: right;

            }
        }
        .you{
            width: 100%;
            height: 118px;
            border-bottom: 1px solid gray;
        }
        .bei{
            color: gray;
        }
        .jin{
            margin-bottom: 40px;
        }
</style>
